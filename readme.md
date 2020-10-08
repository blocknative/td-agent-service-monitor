# td-agent-service-monitor

## Usage

Enable td-agent Monitoring Agent by adding these lines to your td-agent configuration file

```text
<source>
  @type monitor_agent
  bind 0.0.0.0
  port 24220
</source>
```

Start getting updates in node.js

```js
const tdAgentServiceMonitor = require('td-agent-service-monitor')
const callback = (ServiceStatus) => { /* do something with ServiceStatus */ }
const config = { callback }
tdAgentServiceMonitor.start(config)
```

Stop updates

```js
tdAgentServiceMonitor.stop()
```

## More config options

| option | description | default |
| --------------- | --------------- | --------------- |
| host | monitor-agent port | '0.0.0.0' |
| port | monitor-agent port | '24220' |
| checkInterval | interval in ms to check td-agent | 10000 |
| callback | function to call with td-agent ServiceStatus | no op |

## ServiceStatus

```js
{
  alive: Boolean, // did monitor-agent respond?
  plugins: Plugin[] // see https://docs.fluentd.org/input/monitor_agent#output-example
}
```
