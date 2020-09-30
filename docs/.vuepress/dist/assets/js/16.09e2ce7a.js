(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{366:function(t,s,e){"use strict";e.r(s);var a=e(25),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setup-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-plugin"}},[t._v("#")]),t._v(" Setup Plugin")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": This is totally "),e("em",[t._v("Optional")]),t._v(", the setting is here for flexibility.")]),t._v(" "),e("p",[t._v("Below is a quote from cassiopeia:")]),t._v(" "),e("blockquote",[e("p",[t._v("Plugins monkeypatch Cass to provide modified or additional functionality. They are listed below.")])]),t._v(" "),e("blockquote",[e("p",[t._v("The plugins for Cass are stored in two different repositories: cassiopeia-plugins and cassiopeia-datastores. cassiopeia-plugins contains functionality that modify the behavior of Cass’s objects, while cassiopeia-datastores provides additional datastores (such as databases). Both of these are called “plugins” in this documentation.")])]),t._v(" "),e("blockquote",[e("p",[t._v("Plugins can be added to Cass by downloading the appropriate plugin and putting it on your PYTHONPATH environment variable. Then, in your settings file, you specify the name of the module for that plugin (using the package keyword) as if you were directly importing it into your project. The name of the package specifies the data store that that will be loaded from that package and put on the pipeline.")])]),t._v(" "),e("h2",{attrs:{id:"set-your-plugins-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-your-plugins-settings"}},[t._v("#")]),t._v(" Set your plugins settings")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": This is totally "),e("em",[t._v("Optional")]),t._v(", the setting is here for being flexibility.")]),t._v(" "),e("p",[t._v("File: "),e("code",[t._v("settings.py")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Settings Variable: "),e("code",[t._v("CASSIOPEIA_PLUGINS")]),t._v(" or "),e("code",[t._v("CASSIOPEIA_PIPELINE")])])]),t._v(" "),e("li",[e("p",[t._v("Usage: Define the plugins you want to add.")])]),t._v(" "),e("li",[e("p",[t._v("Accepts: Dict")]),t._v(" "),e("blockquote",[e("p",[t._v("keys: Plugin name.")])]),t._v(" "),e("blockquote",[e("p",[t._v("values: dict of arguments required by the plugin.")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("A list of plugins is "),e("a",{attrs:{href:"#plugins"}},[t._v("later on the page")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),e("p",[t._v("A list of supported Plugins.")]),t._v(" "),e("h3",{attrs:{id:"championgg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#championgg"}},[t._v("#")]),t._v(" ChampionGG")]),t._v(" "),e("ul",[e("li",[t._v("Installing: "),e("code",[t._v("pip install cassiopeia-championgg")])]),t._v(" "),e("li",[t._v("Description: The ChampionGG plugin pulls data from the "),e("a",{attrs:{href:"http://api.champion.gg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("champion.gg api"),e("OutboundLink")],1),t._v(". This data is accessible via the Champion.championgg attribute.")]),t._v(" "),e("li",[t._v("Type of Plugin: Datastore")]),t._v(" "),e("li",[t._v("Settings variable belonging: "),e("code",[t._v("CASSIOPEIA_PIPELINE")])]),t._v(" "),e("li",[t._v("Module/Plugin name (key): "),e("code",[t._v("ChampionGG")])]),t._v(" "),e("li",[t._v("Supports multiple instances: No.")]),t._v(" "),e("li",[t._v("Object type supported: "),e("code",[t._v("championgg")])]),t._v(" "),e("li",[t._v("Recommended placement on pipeline: Right before "),e("code",[t._v("RiotAPI")]),t._v(".")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Arguments")]),t._v(" "),e("th",[t._v("Accepts")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v('"PACKAGE"')])]),t._v(" "),e("td",[t._v("Name of the plugin installed: "),e("code",[t._v('"cassiopeia_championgg"')])]),t._v(" "),e("td",[t._v("No default, required to be plugged correctly")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v('"API_KEY"')])]),t._v(" "),e("td",[t._v("Champion.gg api key in string")]),t._v(" "),e("td",[e("code",[t._v('"CHAMPIONGG_KEY"')])])])])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("CASSIOPEIA_PIPELINE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...,")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ChampionGG"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PACKAGE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cassiopeia_championgg"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"API_KEY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" os"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CHAMPIONGG_KEY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Currently "),e("code",[t._v("championgg")]),t._v(" objects will not sink into "),e("code",[t._v("DjangoCache")]),t._v(" nor "),e("code",[t._v("Omnistone")]),t._v(", because it's not implemented yet. Request an Issue if needed.")])]),t._v(" "),e("h3",{attrs:{id:"simple-kv-disk-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-kv-disk-store"}},[t._v("#")]),t._v(" Simple KV Disk Store")]),t._v(" "),e("ul",[e("li",[t._v("Installing: "),e("code",[t._v("pip install cassiopeia-diskstore")])]),t._v(" "),e("li",[t._v("Description: This plugin provides a disk-database. "),e("s",[t._v("It is especially useful")]),t._v(" for staticdata, which never changes. See warning below.")]),t._v(" "),e("li",[t._v("Type of Plugin: Datastore")]),t._v(" "),e("li",[t._v("Settings variable belonging: "),e("code",[t._v("CASSIOPEIA_PIPELINE")])]),t._v(" "),e("li",[t._v("Module/Plugin name (key): "),e("code",[t._v("SimpleKVDiskStore")])]),t._v(" "),e("li",[t._v("Supports multiple instances: No.")]),t._v(" "),e("li",[t._v("Object type supported: "),e("code",[t._v("cassiopeia.dto")])]),t._v(" "),e("li",[t._v("Recommended placement on pipeline: Before "),e("code",[t._v("DDragon")]),t._v(" and "),e("code",[t._v("RiotAPI")]),t._v(".")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Arguments")]),t._v(" "),e("th",[t._v("Accepts")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v('"PACKAGE"')])]),t._v(" "),e("td",[t._v("Name of the plugin installed: "),e("code",[t._v('"cassiopeia_diskstore"')])]),t._v(" "),e("td",[t._v("No default, required to be plugged correctly")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v('"PATH"')])]),t._v(" "),e("td",[t._v("Your absolute path to store data")]),t._v(" "),e("td",[t._v("Unknown, please specify to avoid errors.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v('"EXPIRATIONS_MAP"')])]),t._v(" "),e("td",[t._v("Dict of expiration mapping as documented in "),e("RouterLink",{attrs:{to:"/documentation/pipeline.html#arguments"}},[t._v("previous page")]),t._v(".")],1),t._v(" "),e("td",[t._v("The default expirations can be found in cassiopeia's "),e("a",{attrs:{href:"https://cassiopeia.readthedocs.io/en/latest/plugins.html#simple-kv-disk-store",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentations"),e("OutboundLink")],1)])])])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("CASSIOPEIA_PIPELINE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...,")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SimpleKVDiskStore"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PACKAGE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cassiopeia_diskstore"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PATH"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/absolute/path/to/store/data/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EXPIRATIONS_MAP"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#... expirations settings going here ...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[e("code",[t._v("MatchHistory")]),t._v(" is bugged on the API side, thus to avoid unexpected results, this is not sinked into this datastore.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("You should not use this datastore unless a reason is given (to yourself).\nIt does not automatically delete files after it is expired, which might cause memory issues in some cases.\nConsider using the Filebased cache provided by Django out of the box and add it to "),e("code",[t._v("DjangoCache")]),t._v(".")])])])}),[],!1,null,null,null);s.default=i.exports}}]);