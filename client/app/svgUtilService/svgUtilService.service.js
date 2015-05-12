'use strict';

angular.module('howbighowmanyApp')
.service('svgUtilService', function () {
    this.fileize = function(el) {
        //Get svg source
        var svg = el;
        var style = ".background { fill: #CDDEE6; } .mean { stroke: steelblue; stroke-width: 5; } .user { stroke: tomato; stroke-width: 5; } .user-circle { stroke: none; fill: tomato; } .bar { fill: #EEEEEE; stroke-width: 2; stroke-color: #EEEEEE; } .line { fill: none; stroke: steelblue; stroke-width: 5px; } .axis path, .axis line { fill: none; stroke: #000; shape-rendering: crispEdges; } .axis { font-family: 'Source Sans Pro', sans-serif; font-weight: 400; font-size: 18px; letter-spacing: 0.3rem; text-align: center; text-transform: uppercase; } .mouse-circle { stroke: none; fill: steelblue; } .label { font-family: 'Source Sans Pro', sans-serif; font-weight: 700; font-size: 18px; letter-spacing: 0.3rem; text-align: center; text-transform: uppercase; margin: 10px 0 0 0; } .user-text { fill: tomato; } .mean-text { fill: steelblue; }";
        var style = "<style type='text/css'><![CDATA[" + style + "]]></style>";
        svg.innerHTML = style + svg.innerHTML;
        var serializer = new XMLSerializer();
        var source = serializer.serializeToString(svg);
        
        //insert external style portion as CDATA
        var style = ".background { fill: #CDDEE6; } .mean { stroke: steelblue; stroke-width: 5; } .user { stroke: tomato; stroke-width: 5; } .user-circle { stroke: none; fill: tomato; } .bar { fill: #EEEEEE; stroke-width: 2; stroke-color: #EEEEEE; } .line { fill: none; stroke: steelblue; stroke-width: 5px; } .axis path, .axis line { fill: none; stroke: #000; shape-rendering: crispEdges; } .axis { font-family: 'Source Sans Pro', sans-serif; font-weight: 400; font-size: 18px; letter-spacing: 0.3rem; text-align: center; text-transform: uppercase; } .mouse-circle { stroke: none; fill: steelblue; } .label { font-family: 'Source Sans Pro', sans-serif; font-weight: 700; font-size: 18px; letter-spacing: 0.3rem; text-align: center; text-transform: uppercase; margin: 10px 0 0 0; } .user-text { fill: tomato; } .mean-text { fill: steelblue; }";
        var style = "<style type='text/css'><![CDATA[" + style + "]]></style>";
    

        //add name spaces
        if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
            source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
        }
        if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
            source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
        }

        //add xml declaration
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

        //convert svg source to URI data scheme.
        
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
    };
});

/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(http://fonts.gstatic.com/s/sourcesanspro/v9/toadOcfmlt9b38dHJxOBGOode0-EuMkY--TSyExeINg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(http://fonts.gstatic.com/s/sourcesanspro/v9/toadOcfmlt9b38dHJxOBGOode0-EuMkY--TSyExeINg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  src: url("data:application/font-woff2,charset=utf-8;base64,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 AA==");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(http://fonts.gstatic.com/s/sourcesanspro/v9/toadOcfmlt9b38dHJxOBGOode0-EuMkY--TSyExeINg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
}
