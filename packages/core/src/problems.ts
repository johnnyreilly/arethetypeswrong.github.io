import type { Problem, ProblemKind, ResolutionKind, ResolutionOption, Analysis } from "./types.js";
import {
  allResolutionKinds,
  getResolutionKinds,
  getResolutionOption,
  isEntrypointResolutionProblem,
  isFileProblem,
  isResolutionBasedFileProblem,
} from "./utils.js";

export interface ProblemKindInfo {
  title: string;
  emoji: string;
  shortDescription: string;
  description: string;
  docsUrl: string;
}

export const problemKindInfo: Record<ProblemKind, ProblemKindInfo> = {
  Wildcard: {
    emoji: "❓",
    title: "Wildcards",
    shortDescription: "Unable to check",
    description: "Wildcard subpaths cannot yet be analyzed by this tool.",
    docsUrl: "https://github.com/arethetypeswrong/arethetypeswrong.github.io/issues/40",
  },
  NoResolution: {
    emoji: "💀",
    title: "Resolution failed",
    shortDescription: "Resolution failed",
    description: "Import failed to resolve to type declarations or JavaScript files.",
    docsUrl: "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/NoResolution.md",
  },
  UntypedResolution: {
    emoji: "❌",
    title: "Could not find types",
    shortDescription: "No types",
    description: "Import resolved to JavaScript files, but no type declarations were found.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md",
  },
  FalseCJS: {
    emoji: "🎭",
    title: "Types are CJS, but implementation is ESM",
    shortDescription: "Masquerading as CJS",
    description: "Import resolved to a CommonJS type declaration file, but an ESM JavaScript file.",
    docsUrl: "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md",
  },
  FalseESM: {
    emoji: "👺",
    title: "Types are ESM, but implementation is CJS",
    shortDescription: "Masquerading as ESM",
    description: "Import resolved to an ESM type declaration file, but a CommonJS JavaScript file.",
    docsUrl: "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseESM.md",
  },
  CJSResolvesToESM: {
    emoji: "⚠️",
    title: "Entrypoint is ESM-only",
    shortDescription: "ESM (dynamic import only)",
    description:
      "A `require` call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md",
  },
  FallbackCondition: {
    emoji: "🐛",
    title: "Resloved through fallback condition",
    shortDescription: "Used fallback condition",
    description:
      "Import resolved to types through a conditional package.json export, but only after failing to resolve through an earlier condition. This behavior is a [TypeScript bug](https://github.com/microsoft/TypeScript/issues/50762). It may misrepresent the runtime behavior of this import and should not be relied upon.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FallbackCondition.md",
  },
  CJSOnlyExportsDefault: {
    emoji: "🤨",
    title: "CJS module uses default export",
    shortDescription: "CJS default export",
    description:
      "CommonJS module simulates a default export with `exports.default` and `exports.__esModule`, but does not also set `module.exports` for compatibility with Node. Node, and [some bundlers under certain conditions](https://andrewbranch.github.io/interop-test/#synthesizing-default-exports-for-cjs-modules), do not respect the `__esModule` marker, so accessing the intended default export will require a `.default` property access on the default import.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSOnlyExportsDefault.md",
  },
  FalseExportDefault: {
    emoji: "❗️",
    title: "Types incorrectly use default export",
    shortDescription: "Incorrect default export",
    description:
      "The resolved types use `export default` where the JavaScript file appears to use `module.exports =`. This will cause TypeScript under the `node16` module mode to think an extra `.default` property access is required, but that will likely fail at runtime. These types should use `export =` instead of `export default`.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseExportDefault.md",
  },
  UnexpectedModuleSyntax: {
    emoji: "🚭",
    title: "Syntax is incompatible with detected module kind",
    shortDescription: "Unexpected module syntax",
    description:
      "Syntax detected in the module is incompatible with the module kind according to the package.json or file extension. This is an error in Node and may cause problems in some bundlers.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UnexpectedModuleSyntax.md",
  },
  InternalResolutionError: {
    emoji: "🥴",
    title: "Internal resolution error",
    shortDescription: "Internal resolution error",
    description:
      "Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files.",
    docsUrl:
      "https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md",
  },
};

export const allProblemKinds = Object.keys(problemKindInfo) as ProblemKind[];

export interface ProblemFilter {
  kind?: readonly ProblemKind[];
  entrypoint?: string;
  resolutionKind?: ResolutionKind;
  resolutionOption?: ResolutionOption;
}

export function filterProblems(analysis: Analysis, filter: ProblemFilter): Problem[];
export function filterProblems(problems: readonly Problem[], analysis: Analysis, filter: ProblemFilter): Problem[];
export function filterProblems(
  ...args:
    | [analysis: Analysis, filter: ProblemFilter]
    | [problems: readonly Problem[], analysis: Analysis, filter: ProblemFilter]
) {
  const [problems, analysis, filter] = args.length === 2 ? [args[0].problems, ...args] : args;
  return problems.filter((p) => {
    if (filter.kind && !filter.kind.includes(p.kind)) {
      return false;
    }
    if (filter.entrypoint && filter.resolutionKind) {
      return problemAffectsEntrypointResolution(p, filter.entrypoint, filter.resolutionKind, analysis);
    }
    if (filter.entrypoint && filter.resolutionOption) {
      return getResolutionKinds(filter.resolutionOption).every((resolutionKind) =>
        problemAffectsEntrypointResolution(p, filter.entrypoint!, resolutionKind, analysis)
      );
    }
    if (filter.entrypoint) {
      return problemAffectsEntrypoint(p, filter.entrypoint, analysis);
    }
    if (filter.resolutionKind) {
      return problemAffectsResolutionKind(p, filter.resolutionKind, analysis);
    }
    return true;
  });
}

export function problemAffectsResolutionKind(
  problem: Problem,
  resolutionKind: ResolutionKind,
  analysis: Analysis
): boolean {
  if (isEntrypointResolutionProblem(problem)) {
    return problem.resolutionKind === resolutionKind;
  }
  if (isResolutionBasedFileProblem(problem)) {
    return problem.resolutionOption === getResolutionOption(resolutionKind);
  }
  return Object.values(analysis.entrypoints).some(
    (entrypointInfo) =>
      entrypointInfo.resolutions[resolutionKind].files?.includes(problem.fileName) ||
      entrypointInfo.resolutions[resolutionKind].implementationResolution?.fileName === problem.fileName
  );
}

export function problemAffectsEntrypoint(problem: Problem, entrypoint: string, analysis: Analysis): boolean {
  if (isEntrypointResolutionProblem(problem)) {
    return problem.entrypoint === entrypoint;
  }
  return allResolutionKinds.some(
    (resolutionKind) =>
      analysis.entrypoints[entrypoint]?.resolutions[resolutionKind].files?.includes(problem.fileName) ||
      analysis.entrypoints[entrypoint]?.resolutions[resolutionKind].implementationResolution?.fileName ===
        problem.fileName
  );
}

export function problemAffectsEntrypointResolution(
  problem: Problem,
  entrypoint: string,
  resolutionKind: ResolutionKind,
  analysis: Analysis
): boolean {
  if (isEntrypointResolutionProblem(problem)) {
    return problem.entrypoint === entrypoint && problem.resolutionKind === resolutionKind;
  }
  if (isResolutionBasedFileProblem(problem)) {
    return (
      getResolutionOption(resolutionKind) === problem.resolutionOption &&
      !!analysis.entrypoints[entrypoint]?.resolutions[resolutionKind].files?.includes(problem.fileName)
    );
  }
  if (isFileProblem(problem)) {
    return (
      analysis.entrypoints[entrypoint]?.resolutions[resolutionKind].files?.includes(problem.fileName) ||
      analysis.entrypoints[entrypoint]?.resolutions[resolutionKind].implementationResolution?.fileName ===
        problem.fileName
    );
  }
  throw new Error(`Unhandled problem type '${(problem satisfies never as Problem).kind}'`);
}
