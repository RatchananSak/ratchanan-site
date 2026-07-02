# Graph Report - .  (2026-07-02)

## Corpus Check
- Corpus is ~33,917 words - fits in a single context window. You may not need a graph.

## Summary
- 275 nodes · 306 edges · 39 communities (25 shown, 14 thin omitted)
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 57 edges (avg confidence: 0.79)
- Token cost: 175,000 input · 117,036 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Vercel React Best Practices|Vercel React Best Practices]]
- [[_COMMUNITY_Package Dependencies|Package Dependencies]]
- [[_COMMUNITY_Security & Config Rules|Security & Config Rules]]
- [[_COMMUNITY_App Source Code|App Source Code]]
- [[_COMMUNITY_Async Data Fetching Rules|Async Data Fetching Rules]]
- [[_COMMUNITY_Rendering Optimization Rules|Rendering Optimization Rules]]
- [[_COMMUNITY_Server-Side Performance|Server-Side Performance]]
- [[_COMMUNITY_Client-Side Caching Rules|Client-Side Caching Rules]]
- [[_COMMUNITY_Bundle Optimization Rules|Bundle Optimization Rules]]
- [[_COMMUNITY_PWA Manifest|PWA Manifest]]
- [[_COMMUNITY_Server Cache Rules|Server Cache Rules]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Advanced React Hooks Rules|Advanced React Hooks Rules]]
- [[_COMMUNITY_Client Event & SWR Rules|Client Event & SWR Rules]]
- [[_COMMUNITY_Transitions & Deferred Values|Transitions & Deferred Values]]
- [[_COMMUNITY_JS Utility Patterns|JS Utility Patterns]]
- [[_COMMUNITY_Conditional Rendering|Conditional Rendering]]
- [[_COMMUNITY_Entry Point & Web Vitals|Entry Point & Web Vitals]]
- [[_COMMUNITY_DOM Layout Thrashing|DOM Layout Thrashing]]
- [[_COMMUNITY_Hydration Mismatch Rules|Hydration Mismatch Rules]]
- [[_COMMUNITY_RSC Serialization|RSC Serialization]]
- [[_COMMUNITY_Parallel Fetching|Parallel Fetching]]
- [[_COMMUNITY_Logo Assets|Logo Assets]]
- [[_COMMUNITY_Init Once Pattern|Init Once Pattern]]
- [[_COMMUNITY_Babel Config|Babel Config]]
- [[_COMMUNITY_Iteration Optimization|Iteration Optimization]]
- [[_COMMUNITY_Index Map Lookups|Index Map Lookups]]
- [[_COMMUNITY_Content Visibility|Content Visibility]]
- [[_COMMUNITY_Resource Hints|Resource Hints]]
- [[_COMMUNITY_Defer Reads Pattern|Defer Reads Pattern]]
- [[_COMMUNITY_Non-Blocking Operations|Non-Blocking Operations]]
- [[_COMMUNITY_Server Auth Actions|Server Auth Actions]]
- [[_COMMUNITY_Bundle Analysis|Bundle Analysis]]
- [[_COMMUNITY_Script Loading|Script Loading]]
- [[_COMMUNITY_Lazy State Init|Lazy State Init]]
- [[_COMMUNITY_Inline Components|Inline Components]]

## God Nodes (most connected - your core abstractions)
1. `Ratchanan Site — React SPA Project` - 14 edges
2. `Security and Performance Fix Plan` - 10 edges
3. `SKILL.md — Vercel React Best Practices Skill Definition` - 9 edges
4. `AGENTS.md — Compiled Best Practices Guide` - 9 edges
5. `Sections Metadata — 8 Performance Categories` - 9 edges
6. `Section 3: Server-Side Performance (HIGH)` - 9 edges
7. `Section 5: Re-render Optimization (MEDIUM)` - 9 edges
8. `Section 6: Rendering Performance (MEDIUM)` - 9 edges
9. `useWindowDimensions()` - 8 edges
10. `Section 7: JavaScript Performance (LOW-MEDIUM)` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Code Splitting with React.lazy + Suspense` --semantically_similar_to--> `Strategic Suspense Boundaries`  [INFERRED] [semantically similar]
  security-and-perf-fixes.md → .claude/skills/vercel-react-best-practices/AGENTS.md
- `Memoized MUI sx Prop` --semantically_similar_to--> `Hoist Static JSX Elements`  [INFERRED] [semantically similar]
  security-and-perf-fixes.md → .claude/skills/vercel-react-best-practices/AGENTS.md
- `Resize Debounce with requestAnimationFrame` --semantically_similar_to--> `Defer Non-Critical Work with requestIdleCallback`  [INFERRED] [semantically similar]
  security-and-perf-fixes.md → .claude/skills/vercel-react-best-practices/AGENTS.md
- `Code Splitting with React.lazy + Suspense` --semantically_similar_to--> `Dynamic Imports for Heavy Components`  [INFERRED] [semantically similar]
  security-and-perf-fixes.md → .claude/skills/vercel-react-best-practices/AGENTS.md
- `Deferred Font Loading` --semantically_similar_to--> `Defer Non-Critical Third-Party Libraries`  [INFERRED] [semantically similar]
  security-and-perf-fixes.md → .claude/skills/vercel-react-best-practices/AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Vercel React Best Practices Skill Definition Triad** — claudeskills_vercel_react_best_practices_skill, claudeskills_vercel_react_best_practices_agents, claudeskills_vercel_react_best_practices_readme [EXTRACTED 1.00]
- **Ratchanan Site Architecture Pattern** — ratchanan_site, hash_router_routing, screen_pattern, responsive_navbar, mui_dark_theme [EXTRACTED 1.00]
- **Security and Performance Fix Implementation Flow** — security_and_perf_fixes, csp_security_headers, dependency_updates, code_splitting_react_lazy, deferred_font_loading, react_use_removal [EXTRACTED 1.00]
- **Async Parallelization Ecosystem** — _claude_skills_vercel_react_best_practices_rules_async_api_routes_apirouteswaterfall, _claude_skills_vercel_react_best_practices_rules_async_parallel_parallelpromise, _claude_skills_vercel_react_best_practices_rules_async_dependencies_dependencyparallelization, _claude_skills_vercel_react_best_practices_rules_async_defer_await_deferawait, _claude_skills_vercel_react_best_practices_rules_async_cheap_condition_before_await_cheapconditionbeforeawait [INFERRED 0.85]
- **useEffectEvent Stable Callback Patterns** — _claude_skills_vercel_react_best_practices_rules_advanced_effect_event_deps_effecteventdeps, _claude_skills_vercel_react_best_practices_rules_advanced_event_handler_refs_eventhandlerrefs, _claude_skills_vercel_react_best_practices_rules_advanced_use_latest_uselatest [INFERRED 0.90]
- **Bundle Code Splitting Optimization Chain** — _claude_skills_vercel_react_best_practices_rules_bundle_dynamic_imports_dynamicimports, _claude_skills_vercel_react_best_practices_rules_bundle_defer_third_party_deferthirdparty, _claude_skills_vercel_react_best_practices_rules_bundle_conditional_conditionallading, _claude_skills_vercel_react_best_practices_rules_bundle_preload_preloadintent, _claude_skills_vercel_react_best_practices_rules_bundle_barrel_imports_barrelimports [INFERRED 0.85]
- **JavaScript Performance Optimization Patterns** — claude_skills_vercel_react_best_practices_rules_js_cache_function_results, claude_skills_vercel_react_best_practices_rules_js_cache_property_access, claude_skills_vercel_react_best_practices_rules_js_cache_storage, claude_skills_vercel_react_best_practices_rules_js_combine_iterations, claude_skills_vercel_react_best_practices_rules_js_flatmap_filter, claude_skills_vercel_react_best_practices_rules_js_hoist_regexp, claude_skills_vercel_react_best_practices_rules_js_index_maps, claude_skills_vercel_react_best_practices_rules_js_length_check_first, claude_skills_vercel_react_best_practices_rules_js_min_max_loop, claude_skills_vercel_react_best_practices_rules_js_set_map_lookups, claude_skills_vercel_react_best_practices_rules_js_early_exit, claude_skills_vercel_react_best_practices_rules_js_batch_dom_css, claude_skills_vercel_react_best_practices_rules_js_tosorted_immutable, claude_skills_vercel_react_best_practices_rules_js_request_idle_callback [EXTRACTED 1.00]
- **Client-Side Deduplication and Storage Patterns** — claude_skills_vercel_react_best_practices_rules_client_swr_dedup, claude_skills_vercel_react_best_practices_rules_client_event_listeners, claude_skills_vercel_react_best_practices_rules_client_localstorage_schema, claude_skills_vercel_react_best_practices_rules_js_cache_storage, claude_skills_vercel_react_best_practices_rules_client_passive_event_listeners [INFERRED 0.85]
- **Rendering and Visibility Optimization** — claude_skills_vercel_react_best_practices_rules_rendering_activity, claude_skills_vercel_react_best_practices_rules_rendering_conditional_render, claude_skills_vercel_react_best_practices_rules_rendering_content_visibility, claude_skills_vercel_react_best_practices_rules_rendering_animate_svg_wrapper [INFERRED 0.85]
- **Re-render Prevention Patterns** — claude_skills_vercel_react_best_practices_rules_rerender_memo, claude_skills_vercel_react_best_practices_rules_rerender_no_inline_components, claude_skills_vercel_react_best_practices_rules_rerender_functional_setstate, claude_skills_vercel_react_best_practices_rules_rerender_lazy_state_init, claude_skills_vercel_react_best_practices_rules_rerender_memo_with_default_value [INFERRED 0.85]
- **Server Caching and Parallel Fetching Patterns** — claude_skills_vercel_react_best_practices_rules_server_cache_react, claude_skills_vercel_react_best_practices_rules_server_cache_lru, claude_skills_vercel_react_best_practices_rules_server_parallel_fetching, claude_skills_vercel_react_best_practices_rules_server_parallel_nested_fetching [INFERRED 0.85]
- **Transition and Concurrent Rendering APIs** — claude_skills_vercel_react_best_practices_rules_rendering_usetransition_loading, claude_skills_vercel_react_best_practices_rules_rerender_transitions, claude_skills_vercel_react_best_practices_rules_rerender_use_deferred_value [INFERRED 0.85]

## Communities (39 total, 14 thin omitted)

### Community 0 - "Vercel React Best Practices"
Cohesion: 0.08
Nodes (39): Use Activity Component for Show/Hide, Section 8: Advanced Patterns (LOW), Avoid Layout Thrashing, better-all — Dependency-Based Parallelization Library, AGENTS.md — Compiled Best Practices Guide, Vercel React Best Practices Skill README, Sections Metadata — 8 Performance Categories, Rule File Template (+31 more)

### Community 1 - "Package Dependencies"
Cohesion: 0.05
Nodes (38): browserslist, development, production, dependencies, @babel/plugin-proposal-private-property-in-object, @emotion/react, @emotion/styled, @fontsource/roboto (+30 more)

### Community 2 - "Security & Config Rules"
Cohesion: 0.09
Nodes (27): Avoid Barrel File Imports, Section 2: Bundle Size Optimization (CRITICAL), Project CLAUDE.md — Codebase Guidance, Code Splitting with React.lazy + Suspense, CSP and Security Meta Tags, Dead Code and Dead File Removal, Defer Non-Critical Third-Party Libraries, Deferred Font Loading (+19 more)

### Community 3 - "App Source Code"
Cohesion: 0.15
Nodes (14): App(), darkTheme, drawerItems, NavbarProps, navItems, routes, HomeScreen(), DOMAINS (+6 more)

### Community 4 - "Async Data Fetching Rules"
Cohesion: 0.18
Nodes (13): Prevent Waterfall Chains in API Routes, Promise Early Start Pattern, Check Cheap Conditions Before Async Flags, Defer Await Until Needed, Early Return Optimization Pattern, better-all Library, Dependency-Based Parallelization, Promise Chain Alternative Pattern (+5 more)

### Community 5 - "Rendering Optimization Rules"
Cohesion: 0.17
Nodes (13): Hoist Static JSX Elements, Optimize SVG Precision, Narrow Effect Dependencies, Subscribe to Derived State, Calculate Derived State During Rendering, Use Functional setState Updates, Extract to Memoized Components, Extract Default Non-primitive Parameter Value from Memoized Component to Constant (+5 more)

### Community 6 - "Server-Side Performance"
Cohesion: 0.28
Nodes (9): Use after() for Non-Blocking Operations, Hoist Static I/O to Module Level, lru-cache — Node.js LRU Cache, Cross-Request LRU Caching, Per-Request Deduplication with React.cache(), Minimize Serialization at RSC Boundaries, Authenticate Server Actions Like API Routes, Section 3: Server-Side Performance (HIGH) (+1 more)

### Community 7 - "Client-Side Caching Rules"
Cohesion: 0.28
Nodes (9): Version and Minimize localStorage Data, Cache Repeated Function Calls, Cache Property Access in Loops, Cache Storage API Calls, Hoist RegExp Creation, Defer Non-Critical Work with requestIdleCallback, Module-Level Map Cache, requestIdleCallback API (+1 more)

### Community 8 - "Bundle Optimization Rules"
Cohesion: 0.25
Nodes (8): Avoid Barrel File Imports, optimizePackageImports Config, Conditional Module Loading, Defer Non-Critical Third-Party Libraries, Dynamic Imports for Heavy Components, Feature Flag Preload Pattern, Hover/Focus Preload Pattern, Preload Based on User Intent

### Community 9 - "PWA Manifest"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

### Community 10 - "Server Cache Rules"
Cohesion: 0.29
Nodes (7): Cross-Request LRU Caching, Per-Request Deduplication with React.cache(), Hoist Static I/O to Module Level, Avoid Shared Module State for Request Data, Vercel Fluid Compute - Shared function instances across concurrent requests, LRU Cache - Cross-request caching with lru-cache library, React.cache() - Per-request deduplication for server-side queries

### Community 11 - "TypeScript Config"
Cohesion: 0.29
Nodes (6): compilerOptions, esModuleInterop, jsx, module, target, typeRoots

### Community 12 - "Advanced React Hooks Rules"
Cohesion: 0.47
Nodes (6): Effect Events in Dependency Arrays, useEffectEvent Hook, Store Event Handlers in Refs, useWindowEvent Hook Pattern, SearchInput Debounced Search Pattern, useEffectEvent for Stable Callback Refs

### Community 13 - "Client Event & SWR Rules"
Cohesion: 0.40
Nodes (6): Deduplicate Global Event Listeners, Use Passive Event Listeners for Scrolling Performance, Use SWR for Automatic Deduplication, Passive Event Listeners, SWR Hooks (useSWR, useSWRMutation, useImmutableSWR), useSWRSubscription

### Community 14 - "Transitions & Deferred Values"
Cohesion: 0.40
Nodes (6): Use useTransition Over Manual Loading States, Use Transitions for Non-Urgent Updates, Use useDeferredValue for Expensive Derived Renders, startTransition - Mark state updates as non-urgent transitions, useDeferredValue - Defer expensive renders to keep input responsive, useTransition - React concurrent feature for non-urgent updates

### Community 15 - "JS Utility Patterns"
Cohesion: 0.40
Nodes (5): Early Return from Functions, Early Length Check for Array Comparisons, Use Loop for Min/Max Instead of Sort, Use toSorted() Instead of sort() for Immutability, Immutable Array Methods (toSorted, toReversed, toSpliced, with)

### Community 16 - "Conditional Rendering"
Cohesion: 0.50
Nodes (4): Use Activity Component for Show/Hide, Use Explicit Conditional Rendering, Explicit Ternary Conditional Rendering, React Activity Component

### Community 18 - "DOM Layout Thrashing"
Cohesion: 0.67
Nodes (3): Avoid Layout Thrashing, Animate SVG Wrapper Instead of SVG Element, Layout Thrashing

### Community 19 - "Hydration Mismatch Rules"
Cohesion: 1.00
Nodes (3): Prevent Hydration Mismatch Without Flickering, Suppress Expected Hydration Mismatches, Hydration - React SSR process of attaching event handlers to server-rendered HTML

### Community 20 - "RSC Serialization"
Cohesion: 1.00
Nodes (3): Avoid Duplicate Serialization in RSC Props, Minimize Serialization at RSC Boundaries, RSC Serialization - React Server/Client boundary object serialization

### Community 21 - "Parallel Fetching"
Cohesion: 1.00
Nodes (3): Parallel Data Fetching with Component Composition, Parallel Nested Data Fetching, Parallel Data Fetching - RSC composition pattern to eliminate waterfalls

### Community 22 - "Logo Assets"
Cohesion: 1.00
Nodes (3): React CRA Logo 192x192, React CRA Logo 512x512, React Logo SVG

## Knowledge Gaps
- **133 isolated node(s):** `plugins`, `name`, `version`, `homepage`, `private` (+128 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Security and Performance Fix Plan` connect `Security & Config Rules` to `Vercel React Best Practices`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `Vercel React Best Practices Skill` connect `Vercel React Best Practices` to `Security & Config Rules`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `plugins`, `name`, `version` to the rest of the system?**
  _133 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Vercel React Best Practices` be split into smaller, more focused modules?**
  _Cohesion score 0.07557354925775979 - nodes in this community are weakly interconnected._
- **Should `Package Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.05128205128205128 - nodes in this community are weakly interconnected._
- **Should `Security & Config Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.08547008547008547 - nodes in this community are weakly interconnected._
- **Should `App Source Code` be split into smaller, more focused modules?**
  _Cohesion score 0.14666666666666667 - nodes in this community are weakly interconnected._