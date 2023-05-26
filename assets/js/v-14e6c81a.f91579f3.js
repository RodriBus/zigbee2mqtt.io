"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14435],{158937:(e,t,o)=>{o.r(t),o.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-14e6c81a","path":"/devices/mTouch_Dim.html","title":"CTM Lyng mTouch_Dim control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"CTM Lyng mTouch_Dim control via MQTT","description":"Integrate your CTM Lyng mTouch_Dim via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-01T15:06:58.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Ballast_minimum_level (numeric)","slug":"ballast-minimum-level-numeric","link":"#ballast-minimum-level-numeric","children":[]},{"level":3,"title":"Ballast_maximum_level (numeric)","slug":"ballast-maximum-level-numeric","link":"#ballast-maximum-level-numeric","children":[]},{"level":3,"title":"Ballast_power_on_level (numeric)","slug":"ballast-power-on-level-numeric","link":"#ballast-power-on-level-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1684998865000},"filePathRelative":"devices/mTouch_Dim.md"}')},666852:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var l=o(166252);const i=(0,l._)("h1",{id:"ctm-lyng-mtouch-dim",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ctm-lyng-mtouch-dim","aria-hidden":"true"},"#"),(0,l.Uk)(" CTM Lyng mTouch_Dim")],-1),a=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th")])],-1),d=(0,l._)("tr",null,[(0,l._)("td",null,"Model"),(0,l._)("td",null,"mTouch_Dim")],-1),n=(0,l._)("td",null,"Vendor",-1),u=(0,l._)("tr",null,[(0,l._)("td",null,"Description"),(0,l._)("td",null,"mTouch Dim OP, touch dimmer")],-1),s=(0,l._)("tr",null,[(0,l._)("td",null,"Exposes"),(0,l._)("td",null,"light (state, brightness), ballast_minimum_level, ballast_maximum_level, ballast_power_on_level, linkquality")],-1),c=(0,l._)("tr",null,[(0,l._)("td",null,"Picture"),(0,l._)("td",null,[(0,l._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/mTouch_Dim.jpg",alt:"CTM Lyng mTouch_Dim"})])],-1),m=(0,l._)("h2",{id:"options",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,l.Uk)(" Options")],-1),r=(0,l.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric" aria-hidden="true">#</a> Ballast_minimum_level (numeric)</h3><p>Specifies the minimum brightness value. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>99</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric" aria-hidden="true">#</a> Ballast_maximum_level (numeric)</h3><p>Specifies the maximum brightness value. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>99</code>.</p><h3 id="ballast-power-on-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-power-on-level-numeric" aria-hidden="true">#</a> Ballast_power_on_level (numeric)</h3><p>Specifies the initialisation light level. Can not be set lower than &quot;ballast_minimum_level&quot;. Value can be found in the published state on the <code>ballast_power_on_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_power_on_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_power_on_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>99</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),h={},p=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.kq)(" !!!! "),(0,l.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,l.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,l.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,l.kq)(" !!!! "),i,(0,l._)("table",null,[a,(0,l._)("tbody",null,[d,(0,l._)("tr",null,[n,(0,l._)("td",null,[(0,l.Wm)(o,{to:"/supported-devices/#v=CTM%20Lyng"},{default:(0,l.w5)((()=>[(0,l.Uk)("CTM Lyng")])),_:1})])]),u,s,c])]),(0,l.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,l.kq)(" Notes END: Do not edit below this line "),m,(0,l._)("p",null,[(0,l._)("em",null,[(0,l.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,l.w5)((()=>[(0,l.Uk)("How to use device type specific configuration")])),_:1})])]),r])}]])}}]);