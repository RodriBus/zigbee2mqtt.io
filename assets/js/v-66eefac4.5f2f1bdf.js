"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91801],{85047:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-66eefac4","path":"/devices/ZM-AM02_cover.html","title":"Zemismart ZM-AM02_cover control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Zemismart ZM-AM02_cover control via MQTT","description":"Integrate your Zemismart ZM-AM02_cover via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-01T09:06:16.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Options (composite)","slug":"options-composite","link":"#options-composite","children":[]},{"level":3,"title":"Motor_working_mode (enum)","slug":"motor-working-mode-enum","link":"#motor-working-mode-enum","children":[]},{"level":3,"title":"Percent_state (numeric)","slug":"percent-state-numeric","link":"#percent-state-numeric","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Motor_direction (enum)","slug":"motor-direction-enum","link":"#motor-direction-enum","children":[]},{"level":3,"title":"Border (enum)","slug":"border-enum","link":"#border-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1684998865000},"filePathRelative":"devices/ZM-AM02_cover.md"}')},671937:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var i=t(166252);const d=(0,i._)("h1",{id:"zemismart-zm-am02-cover",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#zemismart-zm-am02-cover","aria-hidden":"true"},"#"),(0,i.Uk)(" Zemismart ZM-AM02_cover")],-1),r=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZM-AM02_cover")],-1),a=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee/RF curtain converter")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), options, motor_working_mode, percent_state, mode, motor_direction, border, linkquality")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZM-AM02_cover.jpg",alt:"Zemismart ZM-AM02_cover"})])],-1),u=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="options-composite" tabindex="-1"><a class="header-anchor" href="#options-composite" aria-hidden="true">#</a> Options (composite)</h3><ul><li><code>motor_speed</code> (numeric): Motor speed max value is 255</li></ul><h3 id="motor-working-mode-enum" tabindex="-1"><a class="header-anchor" href="#motor-working-mode-enum" aria-hidden="true">#</a> Motor_working_mode (enum)</h3><p>Value can be found in the published state on the <code>motor_working_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_working_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>continuous</code>, <code>intermittently</code>.</p><h3 id="percent-state-numeric" tabindex="-1"><a class="header-anchor" href="#percent-state-numeric" aria-hidden="true">#</a> Percent_state (numeric)</h3><p>Value can be found in the published state on the <code>percent_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum" aria-hidden="true">#</a> Mode (enum)</h3><p>Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>morning</code>, <code>night</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum" aria-hidden="true">#</a> Motor_direction (enum)</h3><p>Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>forward</code>, <code>back</code>.</p><h3 id="border-enum" tabindex="-1"><a class="header-anchor" href="#border-enum" aria-hidden="true">#</a> Border (enum)</h3><p>Value can be found in the published state on the <code>border</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;border&quot;: NEW_VALUE}</code>. The possible values are: <code>up</code>, <code>down</code>, <code>down_delete</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),m={},p=(0,t(983744).Z)(m,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[r,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[a,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Zemismart"},{default:(0,i.w5)((()=>[(0,i.Uk)("Zemismart")])),_:1})])]),c,s,l])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),u,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);