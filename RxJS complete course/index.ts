import "./src/server";

import { combineallSpec } from "./src/lessons/operators/specs/combination/combineall-spec";
import { combinelatestSpec1 } from "./src/lessons/operators/specs/combination/combinelatest-spec";
import { concatSpec } from "./src/lessons/operators/specs/combination/concat-spec";
import {
    concatallSpec1,
    concatallSpec2,
    concatallSpec3,
} from "./src/lessons/operators/specs/combination/concatall-spec";
import {
    endwithSpec1,
    endwithSpec2,
} from "./src/lessons/operators/specs/combination/endwith-spec";
import {
    forkjoinSpec1,
    forkjoinSpec2,
    forkjoinSpec3,
    forkjoinSpec4,
    forkjoinSpec5,
} from "./src/lessons/operators/specs/combination/forkjoin-spec";
import {
    mergeSpec1,
    mergeSpec2,
} from "./src/lessons/operators/specs/combination/merge-spec";
import {
    mergeallSpec1,
    mergeallSpec2,
} from "./src/lessons/operators/specs/combination/mergeall-spec";
import { pairwiseSpec } from "./src/lessons/operators/specs/combination/pairwise-spec";
import {
    raceSpec1,
    raceSpec2,
} from "./src/lessons/operators/specs/combination/race-spec";
import {
    startwithSpec1,
    startwithSpec2,
    startwithSpec3,
} from "./src/lessons/operators/specs/combination/startwith-spec";
import {
    withlatestfromSpec1,
    withlatestfromSpec2,
} from "./src/lessons/operators/specs/combination/withlatestfrom-spec";
import {
    zipSpec1,
    zipSpec2,
} from "./src/lessons/operators/specs/combination/zip-spec";
// conditional
import {
    defaultifemptySpec1,
    defaultifemptySpec2,
} from "./src/lessons/operators/conditional/defaultIfEmpty-spec";
import {
    everySpec1,
    everySpec2,
    everySpec3,
} from "./src/lessons/operators/conditional/every-spec";
import { iffSpec } from "./src/lessons/operators/conditional/iif-spec";
import { sequenceequalSpec } from "./src/lessons/operators/conditional/sequenceEqual-spec";
// creation
import {
    ajaxSpec1,
    ajaxSpec2,
} from "./src/lessons/operators/creation/ajax-spec";
import {
    createSpec1,
    createSpec2,
} from "./src/lessons/operators/creation/create-spec";
import { deferSpec } from "./src/lessons/operators/creation/defer-spec";
import { emptySpec } from "./src/lessons/operators/creation/empty-spec";
import {
    fromSpec1,
    fromSpec2,
    fromSpec3,
    fromSpec4,
} from "./src/lessons/operators/creation/from-spec";
import { fromeventSpec } from "./src/lessons/operators/creation/fromevent-spec";
import {
    generateSpec1,
    generateSpec2,
} from "./src/lessons/operators/creation/generate-spec";
import { intervalSpec } from "./src/lessons/operators/creation/interval-spec";
import { ofSpec1, ofSpec2 } from "./src/lessons/operators/creation/of-spec";
import { rangeSpec } from "./src/lessons/operators/creation/range-spec";
import { throwerrorSpec } from "./src/lessons/operators/creation/throwerror-spec";
import {
    timerSpec1,
    timerSpec2,
} from "./src/lessons/operators/creation/timer-spec";
// error handling
import {
    catch_catcherrorSpec1,
    catch_catcherrorSpec2,
    catch_catcherrorSpec3,
} from "./src/lessons/operators/error handling/catch_catcherror-spec";
import { retrySpec } from "./src/lessons/operators/error handling/retry-spec";
import { retrywhenSpec } from "./src/lessons/operators/error handling/retrywhen-spec";
// multicasting
import { publishSpec } from "./src/lessons/operators/multicasting/publish-spec";
import {
    multicastSpec1,
    multicastSpec2,
} from "./src/lessons/operators/multicasting/multicast-spec";
import { shareSpec } from "./src/lessons/operators/multicasting/share-spec";
import { sharereplaySpec } from "./src/lessons/operators/multicasting/sharereplay-spec";
// filtering
import { auditSpec } from "./src/lessons/operators/filtering/audit-spec";
import { audittimeSpec } from "./src/lessons/operators/filtering/audittime-spec";
import {
    debounceSpec1,
    debounceSpec2,
} from "./src/lessons/operators/filtering/debounce-spec";
import { debouncetimeSpec } from "./src/lessons/operators/filtering/debouncetime-spec";
import {
    distinctSpec1,
    distinctSpec2,
} from "./src/lessons/operators/filtering/distinct-spec";
import {
    distinctuntilchangedSpec1,
    distinctuntilchangedSpec2,
    distinctuntilchangedSpec3,
} from "./src/lessons/operators/filtering/distinctuntilchanged-spec";
import {
    distinctuntilkeychangedSpec1,
    distinctuntilkeychangedSpec2,
} from "./src/lessons/operators/filtering/distinctuntilkeychanged-spec";
import {
    filterSpec1,
    filterSpec2,
    filterSpec3,
} from "./src/lessons/operators/filtering/filter-spec";
import {
    firstSpec1,
    firstSpec2,
    firstSpec3,
} from "./src/lessons/operators/filtering/first-spec";
import {
    ignoreelementsSpec1,
    ignoreelementsSpec2,
} from "./src/lessons/operators/filtering/ignoreelements-spec";
import {
    lastSpec1,
    lastSpec2,
    lastSpec3,
} from "./src/lessons/operators/filtering/last-spec";
import {
    sampleSpec1,
    sampleSpec2,
    sampleSpec3,
} from "./src/lessons/operators/filtering/sample-spec";
import { singleSpec } from "./src/lessons/operators/filtering/single-spec";
import {
    skipSpec1,
    skipSpec2,
} from "./src/lessons/operators/filtering/skip-spec";
import { skipuntilSpec } from "./src/lessons/operators/filtering/skipuntil-spec";
import { skipwhileSpec } from "./src/lessons/operators/filtering/skipwhile-spec";
import {
    takeSpec1,
    takeSpec2,
    takeSpec3,
} from "./src/lessons/operators/filtering/take-spec";
import { takelastSpec } from "./src/lessons/operators/filtering/takelast-spec";
import {
    takeuntilSpec1,
    takeuntilSpec2,
    takeuntilSpec3,
} from "./src/lessons/operators/filtering/takeuntil-spec";
import {
    takewhileSpec1,
    takewhileSpec2,
    takewhileSpec3,
} from "./src/lessons/operators/filtering/takewhile-spec";
import {
    throttleSpec1,
    throttleSpec2,
} from "./src/lessons/operators/filtering/throttle-spec";
import {
    throttletimeSpec1,
    throttletimeSpec2,
} from "./src/lessons/operators/filtering/throttletime-spec";
// transformation
import {
    bufferSpec1,
    bufferSpec2,
} from "./src/lessons/operators/transformation/buffer-spec";
import {
    buffercountSpec1,
    buffercountSpec2,
    buffercountSpec3,
} from "./src/lessons/operators/transformation/buffercount-spec";
import {
    buffertimeSpec1,
    buffertimeSpec2,
} from "./src/lessons/operators/transformation/buffertime-spec";
import {
    buffertoggelSpec1,
    buffertoggelSpec2,
} from "./src/lessons/operators/transformation/buffertoggle-spec";
import { bufferwhenSpec } from "./src/lessons/operators/transformation/bufferwhen-spec";
import {
    concatmapSpec1,
    concatmapSpec2,
    concatmapSpec3,
} from "./src/lessons/operators/transformation/concatmap-spec";
import {
    concatmaptoSpec1,
    concatmaptoSpec2,
} from "./src/lessons/operators/transformation/concatmapto-spec";
import {
    exhaustmapSpec1,
    exhaustmapSpec2,
} from "./src/lessons/operators/transformation/exhaustmap-spec";
import { expandSpec } from "./src/lessons/operators/transformation/expand-spec";
import {
    groupbySpec1,
    groupbySpec2,
} from "./src/lessons/operators/transformation/groupby-spec";
import {
    mapSpec1,
    mapSpec2,
} from "./src/lessons/operators/transformation/map-spec";
import {
    maptoSpec1,
    maptoSpec2,
} from "./src/lessons/operators/transformation/mapto-spec";
import {
    mergemapSpec1,
    mergemapSpec2,
    mergemapSpec3,
    mergemapSpec4,
    mergemapSpec5,
} from "./src/lessons/operators/transformation/mergemap-spec";
import { mergescanSpec } from "./src/lessons/operators/transformation/mergescan-spec";
import {
    partitionSpec1,
    partitionSpec2,
    partitionSpec3,
} from "./src/lessons/operators/transformation/partition-spec";
import {
    pluckSpec1,
    pluckSpec2,
} from "./src/lessons/operators/transformation/pluck-spec";
import { reduceSpec } from "./src/lessons/operators/transformation/reduce-spec";
import {
    scanSpec1,
    scanSpec2,
    scanSpec3,
    scanSpec4,
} from "./src/lessons/operators/transformation/scan-spec";
import {
    switchmapSpec1,
    switchmapSpec2,
    switchmapSpec3,
} from "./src/lessons/operators/transformation/switchmap-spec";
import { switchmaptoSpec } from "./src/lessons/operators/transformation/switchmapto-spec";
import { toarraySpec } from "./src/lessons/operators/transformation/toarray-spec";
import { windowSpec } from "./src/lessons/operators/transformation/window-spec";
import { windowcountSpec } from "./src/lessons/operators/transformation/windowcount-spec";
import { windowtimeSpec } from "./src/lessons/operators/transformation/windowtime-spec";
import { windowtoggleSpec } from "./src/lessons/operators/transformation/windowtoggle-spec";
import { windowwhenSpec } from "./src/lessons/operators/transformation/windowwhen-spec";
// utility
import { tapSpec1, tapSpec2 } from "./src/lessons/operators/utility/tap-spec";
import {
    delaySpec1,
    delaySpec2,
} from "./src/lessons/operators/utility/delay-spec";
import { delaywhenSpec } from "./src/lessons/operators/utility/delaywhen-spec";
import { dematerializeSpec } from "./src/lessons/operators/utility/dematerialize-spec";
import { finalizeSpec } from "./src/lessons/operators/utility/finalize-spec";
import { repeatSpec } from "./src/lessons/operators/utility/repeat-spec";
import { timeoutSpec } from "./src/lessons/operators/utility/timeout-spec";
import { timeoutwithSpec } from "./src/lessons/operators/utility/timeoutwith-spec";
// subjucts
import { asyncsubjectSpec } from "./src/lessons/subjects/asyncsubject-spec";
import { behaviorsubjectSpec } from "./src/lessons/subjects/behaviorsubject-spec";

// combineallSpec();
// combinelatestSpec1();
// concatSpec();
/////////////////////////
// concatallSpec1();
// concatallSpec2();
// concatallSpec3();
////////////////////////
// endwithSpec1();
// endwithSpec2();
////////////////////////
// forkjoinSpec1();
// forkjoinSpec2();
// forkjoinSpec3();
// forkjoinSpec4();
// forkjoinSpec5();
////////////////////////
// mergeSpec1();
// mergeSpec2();
///////////////////////
// mergeallSpec1();
// mergeallSpec2();
///////////////////////
// pairwiseSpec();
///////////////////////
// raceSpec1();
// raceSpec2();
//////////////////////
// startwithSpec1();
// startwithSpec2();
// startwithSpec3();
//////////////////////
// withlatestfromSpec1();
// withlatestfromSpec2();
//////////////////////
// zipSpec1();
// zipSpec2();
/////////////////////
// defaultifemptySpec1();
// defaultifemptySpec2();
/////////////////////
// everySpec1();
// everySpec2();
// everySpec3();
/////////////////////
// iffSpec();
// sequenceequalSpec();
//////////////////////////////
// ajaxSpec1();
// ajaxSpec2();
//////////////////////////////
// createSpec1();
// createSpec2();
//////////////////////////////
// deferSpec();
// emptySpec();
/////////////////////////////
// fromSpec1();
// fromSpec2();
// fromSpec3();
// fromSpec4();
/////////////////////////////
// fromeventSpec();
/////////////////////////////
// generateSpec1();
// generateSpec2();
////////////////////////////
// intervalSpec();
////////////////////////////
// ofSpec1();
// ofSpec2();
////////////////////////////
// rangeSpec();
// throwerrorSpec();
////////////////////////////
// timerSpec1();
// timerSpec2();
////////////////////////////
// catch_catcherrorSpec1();
// catch_catcherrorSpec2();
// catch_catcherrorSpec3();
////////////////////////////
// retrySpec();
// retrywhenSpec();
// publishSpec();
////////////////////////////
// multicastSpec1();
// multicastSpec2();
////////////////////////////
// shareSpec();
// sharereplaySpec();
// auditSpec();
// audittimeSpec();
////////////////////////////
// debounceSpec1();
// debounceSpec2();
////////////////////////////
// debouncetimeSpec();
////////////////////////////
// distinctSpec1();
// distinctSpec2();
////////////////////////////
// distinctuntilchangedSpec1();
// distinctuntilchangedSpec2();
// distinctuntilchangedSpec3();
////////////////////////////
// distinctuntilkeychangedSpec1();
// distinctuntilkeychangedSpec2();
////////////////////////////
// filterSpec1();
// filterSpec2();
// filterSpec3();
////////////////////////////
// firstSpec1();
// firstSpec2();
// firstSpec3();
////////////////////////////
// ignoreelementsSpec1();
// ignoreelementsSpec2();
////////////////////////////
// lastSpec1();
// lastSpec2();
// lastSpec3();
///////////////////////////
// sampleSpec1();
// sampleSpec2();
// sampleSpec3();
///////////////////////////
// singleSpec();
///////////////////////////
// skipSpec1();
// skipSpec2();
///////////////////////////
// skipuntilSpec();
// skipwhileSpec();
///////////////////////////
// takeSpec1();
// takeSpec2();
// takeSpec3();
///////////////////////////
// takelastSpec();
///////////////////////////
// takeuntilSpec1();
// takeuntilSpec2();
// takeuntilSpec3();
///////////////////////////
// takewhileSpec1();
// takewhileSpec2();
// takewhileSpec3();
///////////////////////////
// throttleSpec1();
// throttleSpec2();
///////////////////////////
// throttletimeSpec1();
// throttletimeSpec2();
///////////////////////////
// bufferSpec1();
// bufferSpec2();
///////////////////////////
// buffercountSpec1();
// buffercountSpec2();
// buffercountSpec3();
///////////////////////////
// buffertimeSpec1();
// buffertimeSpec2();
///////////////////////////
// buffertoggelSpec1();
// buffertoggelSpec2();
///////////////////////////
// bufferwhenSpec();
///////////////////////////
// concatmapSpec1();
// concatmapSpec2();
// concatmapSpec3();
///////////////////////////
// concatmaptoSpec1();
// concatmaptoSpec2();
///////////////////////////
// exhaustmapSpec1();
// exhaustmapSpec2();
///////////////////////////
// expandSpec();
///////////////////////////
// groupbySpec1();
// groupbySpec2();
///////////////////////////
// mapSpec1();
// mapSpec2();
///////////////////////////
// maptoSpec1();
// maptoSpec2();
///////////////////////////
// mergemapSpec1();
// mergemapSpec2();
// mergemapSpec3();
// mergemapSpec4();
// mergemapSpec5();
///////////////////////////
// mergescanSpec();
///////////////////////////
// partitionSpec1();
// partitionSpec2();
// partitionSpec3();
///////////////////////////
// pluckSpec1();
// pluckSpec2();
///////////////////////////
// reduceSpec();
///////////////////////////
// scanSpec1();
// scanSpec2();
// scanSpec3();
// scanSpec4();
///////////////////////////
// switchmapSpec1();
// switchmapSpec2();
// switchmapSpec3();
///////////////////////////
// switchmaptoSpec();
// toarraySpec();
// windowSpec();
// windowcountSpec();
// windowtimeSpec();
// windowtoggleSpec();
// windowwhenSpec();
///////////////////////////
// tapSpec1();
// tapSpec2();
///////////////////////////
// delaySpec1();
// delaySpec2();
///////////////////////////
// delaywhenSpec();
// dematerializeSpec();
// finalizeSpec();
// repeatSpec();
// timeoutSpec();
// timeoutwithSpec();
// asyncsubjectSpec();
// behaviorsubjectSpec();
