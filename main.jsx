import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver} from '@cycle/dom';
import Snabbdom from 'snabbdom-pragma';

const main = () => {
  const sinks = {
    DOM: xs
          .periodic(1000)
          .map(i => <h1>`${i} seconds elapsed.`</h1>)
  }

  return sinks
}

const drivers = {
  DOM: makeDOMDriver('#app')
}


run(main, drivers)