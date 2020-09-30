(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{364:function(e,t,a){"use strict";a.r(t);var s=a(25),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"django-cassiopeia-1-1-to-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-cassiopeia-1-1-to-2-0"}},[e._v("#")]),e._v(" Django Cassiopeia 1.1 to 2.0")]),e._v(" "),a("p",[e._v("A list of changes made from version 1.1 (test) to 2.0")]),e._v(" "),a("p",[e._v("Don't ask why I increment one entire big version, it's a secret.")]),e._v(" "),a("h2",{attrs:{id:"backward-incompatible-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backward-incompatible-changes"}},[e._v("#")]),e._v(" Backward Incompatible Changes")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("RIOT_API_KEY")]),e._v(" is now "),a("code",[e._v("CASSIOPEIA_RIOT_API_KEY")]),e._v(". This is due to a possible variable name conflict, since you might have different API keys for different games (yes I am looking at you Valorant).")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("CASSIOPEIA_GLOBAL")]),e._v(" has splitted into "),a("code",[e._v("CASSIOPEIA_VERSION_FROM_MATCH")]),e._v(" and "),a("code",[e._v("CASSIOPEIA_DEFAULT_REGION")]),e._v(" because the settings is global but wasn't global visually.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("CASSIOPEIA_DJANGO_CACHES")]),e._v(" is merged back to "),a("code",[e._v("CASSIOPEIA_PIPELINE")]),e._v(", because .. it's starting to be hard to maintain. When "),a("code",[e._v("Omnistone")]),e._v(" was created, an issue came up that it's limiting the flexibility of the pipeline, and makes confusions. Now you specify everything inside "),a("code",[e._v("CASSIOPEIA_PIPELINE")]),e._v(" since expirations is now shorten (a lot), so it won't be large neither. Check out the example at the end of "),a("RouterLink",{attrs:{to:"/documentation/pipeline.html"}},[e._v("Setup Pipeline")]),e._v(".")],1)])]),e._v(" "),a("h2",{attrs:{id:"other-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-changes"}},[e._v("#")]),e._v(" Other Changes")]),e._v(" "),a("ol",[a("li",[e._v("Now arguments keys can be all uppercase to fit into the Django settings syntax (e.g. instead of "),a("code",[e._v('"expirations_map"')]),e._v(" now can be "),a("code",[e._v('"EXPIRATIONS_MAP"')]),e._v(").")])]),e._v(" "),a("h2",{attrs:{id:"new-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Refined version of "),a("code",[e._v("Cache")]),e._v(" is introduced as "),a("code",[e._v("Omnistone")]),e._v(" to maintain the fast performance.")])]),e._v(" "),a("li",[a("p",[e._v("A safe check lock is added to all datastore that does not belong to cassiopeia, to better avoid disaster (I guess humanity got enough in 2020).")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);