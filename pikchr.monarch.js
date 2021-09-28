// Monarch syntax highighting for pickchr
//    pikchr: https://pikchr.org/home/doc/trunk/homepage.md
//    monarch: https://microsoft.github.io/monaco-editor/monarch.html
//
// TODO:
//    - Do something with "\" line continuation?
//    - Many keywords are repeated below. Decide whether to lump them
//      together.
//    - Highlighting of dotted items is inconsistent. See .y .sw .ht in 
//      the 'SQLite Architecture Diagram' example.  Need to write a regex
//      with look-behind to specifically look for the dot, and color dotted
//      items consistently differently than their stand-alone keyword
//      counterparts (i.e. the n in 'object.n' vs. 'at 10px n of object').
//    - Units in '$r = 0.2in' are incorrectly colored as a 'keyword' (because 'in'
//      is both a keyword and a unit).  Fix.
return {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
  
    statementKeywords: ['define', 'print', 'assert'],
  
    directions: ['right', 'down', 'left', 'up'],
  
    object_classes: [
      'arc', 'arrow', 'box', 'circle', 'cylinder', 'dot', 'ellipse', 'file', 'line',
      'move', 'oval', 'spline', 'text'
    ],
  
    attributes: [
      'same', 'as', 'dashed', 'dotted', 'color', 'fill', 'behind', 'cw', 'ccw', '<-',
      '->', '<->', 'invis', 'invisible', 'thick', 'thin', 'solid', 'chop', 'fit'
    ],
  
    numericProperties: ['diameter', 'ht', 'height', 'rad', 'radius', 'thickness', 'width', 'wid'],
  
    textAttributes: [
      'above', 'aligned', 'below', 'big', 'bold', 'center', 'italic', 'ljust', 'rjust', 'small' 
    ],
  
    pathAttributes: ['from', 'then', 'to', 'go', 'until', 'even', 'with', 'heading', 'close'],
  
    compassDirection: ['n', 'north', 'ne', 'e', 'east', 'se', 's', 'south', 'sw', 'w', 'west', 'nw'],
  
    locationAttribute: ['at', 'with'],
  
    position: ['of', 'the', 'way',  'between', 'and'],
  
    whichWayFrom: [
      'above', 'below', 'right', 'left', 'n', 'north', 'ne', 'e', 'east',
      'se', 's', 'south', 'sw', 'w', 'west', 'nw', 'of', 'heading', 'compass-angle',
      'from'
    ],

    place: ['vertex'],

    labelKeywords: ['in'],

    nthObject: ['last', 'previous'],
  
    // TODO: Figure out how to properly handle the dot.  These properties are mostly (if not all)
    //       repeated elsewhere without the dot, so they highlight.
    dotEdgenames: [
        '.n', '.north', '.t', '.top', '.ne', '.e', '.east', '.right', '.se', '.s', 
        '.south', '.bot', '.bottom', '.sw', '.w', '.west', '.left', '.nw', '.c', 
        '.center', '.start', '.end'
    ],

    edgenames: [
        'n', 'north', 'ne', 'e', 'east', 'se', 's', 'south', 'sw', 'w', 'west', 'nw', 't', 'top',
        'bot', 'bottom', 'left', 'right', 'c', 'center', 'start', 'end'
    ],

    // TODO: Figure out how to properly handle the dot 
    expressionKeywords: [ 
        //'.x', '.y',
        'x', 'y', 'abs', 'cos', 'dist', 'int', 'max', 'min', 'sin', 'sqrt'
    ],
    
    // TODO: Figure out how to properly handle the dot.  These properties are mostly (if not all)
    //       repeated elsewhere without the dot, so they highlight.
    dotProperties: [
        '.color', '.dashed', '.diameter', '.dotted', '.fill', '.ht', '.height', '.rad', 
        '.radius', '.thickness', '.wid', '.width'
    ],

    operators: [
      '=', '+=', '-=', '*=', '/=', '+', '-', '*', '/', '<', '>'
    ],

    // NOTE: 'linerad' is not listed in the documentation but does exist in scripts and
    // IS a recognized built-in variable.
    builtInVariables: [
      'arcrad', 'arrowhead', 'arrowht', 'arrowwid', 'boxht', 'boxrad', 'boxwid', 'charht',
      'charwid', 'circlerad', 'color', 'cylht', 'cylrad', 'cylwid', 'dashwid', 'dotrad',
      'ellipseht','ellipsewid', 'fileht', 'filerad', 'filewid', 'fill', 'lineht', 'linewid',
      'linerad',
      'movewid', 'ovalht', 'ovalwid', 'scale', 'textht', 'textwid', 'thickness'
    ],

    specialVariables: [
      'bottommargin', 'fgcolor', 'fontscale', 'layer', 'leftmargin', 'margin',
      'rightmargin', 'topmargin'
    ],

    colorsCamelCase: [
        'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque',
        'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue',
        'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan',
        'DarkBlue', 'DarkCyan', 'DarkGoldenrod', 'DarkGray', 'DarkGreen', 'DarkGrey',
        'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid',
        'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray',
        'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue',
        'DimGray', 'DimGrey', 'DodgerBlue', 'Firebrick', 'FloralWhite', 'ForestGreen',
        'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'Goldenrod', 'Gray', 'Green', 
        'GreenYellow', 'Grey', 'Honeydew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory',
        'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue',
        'LightCoral', 'LightCyan', 'LightGoldenrodYellow', 'LightGray', 'LightGreen',
        'LightGrey', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue',
        'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime',
        'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquamarine', 'MediumBlue',
        'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue',
        'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue',
        'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'None', 'Off',
        'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenrod',
        'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru',
        'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown',
        'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'Seashell',
        'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow',
        'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise',
        'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen',
    ],

    colorsLowerCase: [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque',
        'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue',
        'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey',
        'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid',
        'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray',
        'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue',
        'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen',
        'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 
        'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory',
        'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue',
        'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen',
        'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue',
        'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime',
        'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue',
        'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue',
        'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue',
        'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'none', 'off',
        'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod',
        'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
        'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown',
        'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell',
        'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
        'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise',
        'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
    ],
  
    ordinals: /\d+(st|nd|rd|th)/,

    // TODO: Add float
    numberWithUnits: /\d+(in|cm|px|pt|pc|mm)/,

    // TODO: Generalize? Really 'expr%' is supported, so maybe just make % a keyword? Floats?
    numberPercentage: /\d+%/,

    // we include these common regular expressions
    symbols:  /[=><!~?:&|+\-*\/\^%]+/,
 
    // TODO: Not sure yet what escapes pikchr support, but for now this is doing no harm.
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  
    // The main tokenizer for our languages
    tokenizer: {
      root: [

        // TODO:  Decide whether to colorize these. In Python (for example) variables are uncolored, so
        //        it probably makes sense to do the same (i.e. let them "default" to the 'identifier'
        //        token class)
        // Variables of the form '$<variable_name>'
        // [/\$\S+/, 'variable.parameter' ],

        // Label declarations of the form '<label>:'       
        [/^[A-Z][\w_]*(?=:)/, 'entity.name.function' ], 

        // Camel case colors
        [/[A-Z]\w*/, { cases: { '@colorsCamelCase': 'constant.language',
                                // A word that begins with a capital and is not
                                // a CamelCase color is assumed to be a Label reference
                                '@default': 'entity.name.function'  // Labels
                              }}],
  
        // identifiers and keywords
        [/[a-z_$][\w$]*/, { cases: { '@colorsLowerCase': 'constant.language',
                                     '@statementKeywords': 'keyword',
                                     '@directions': 'keyword',
                                     '@object_classes': 'support.function',
                                     '@attributes': 'keyword',
                                     '@numericProperties': 'keyword',
                                     '@pathAttributes': 'keyword',
                                     '@compassDirection': 'support.function',
                                     '@locationAttribute': 'keyword',
                                     '@position': 'keyword',
                                     '@whichWayFrom': 'keyword',
                                     '@place': 'keyword',
                                     '@labelKeywords': 'keyword',
                                     '@nthObject': 'keyword',
                                     '@edgenames': 'keyword',
                                     '@dotEdgenames': 'keyword',
                                     '@expressionKeywords': 'keyword',
                                     '@dotProperties': 'keyword',
                                     '@builtInVariables': 'keyword',
                                     '@specialVariables': 'keyword',
                                     '@textAttributes': 'keyword',
                                     '@default': 'identifier' } }],

        // whitespace
        { include: '@whitespace' },
  
        // delimiters and operators
        [/[{}()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [/@symbols/, { cases: { '@operators': 'operators',
                                '@default'  : '' } } ],
  
        // numbers
        [/@numberWithUnits/, 'constant.numeric'],
        [/@numberPercentage/, 'constant.numeric'],
        [/@ordinals/, 'constant.numeric'],
        [/\d*\.\d+([eE][\-+]?\d+)?/, 'constant.numeric'],
        [/0[xX][0-9a-fA-F]+/, 'constant.numeric'],
        [/\d+/, 'constant.numeric'],
  
        // delimiter: after number because of .\d floats
        [/[;,.]/, 'delimiter'],
  
        // strings
        [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
        [/"/,  { token: 'string.quote', bracket: '@open', next: '@string' } ],
  
        // characters
        [/'[^\\']'/, 'string'],
        [/(')(@escapes)(')/, ['string','string.escape','string']],
        [/'/, 'string.invalid']
      ],
  
      string: [
        [/[^\\"]+/,  'string'],
        [/@escapes/, 'string.escape'],
        [/\\./,      'string.escape.invalid'],
        [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
      ],
  
      whitespace: [
        [/[ \t\r\n]+/, 'white'],
        [/(^#.*$)/, 'comment'],
      ],
    },
  };
