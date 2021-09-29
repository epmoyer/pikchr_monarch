// Monarch syntax highlighting for pikchr
//    pikchr: https://pikchr.org/home/doc/trunk/homepage.md
//    monarch: https://microsoft.github.io/monaco-editor/monarch.html
//
// NOTES:
//    - I took some artistic liberties with token assignments.
//       - The group `expressionKeywords` is reasonably assigned the token
//         'support.function', but it was useful for readability (and as
//         a "linting" aid) to also assign that token to `object_classes`, which
//         are not strictly speaking function-like. 
//       - Dotted suffixes are assigned 'variable.parameter'.  That token has no
//         direct analog in pikchr, so I appropriated it.
//       - Some keywords (e.g. 'right') are repeated in multiple keyword groups.
//         The keyword groups directly map to the language syntax specification whenever
//         possible, so repeating them (per the spec) makes the implementation more
//         maintainable.
//
// KNOWN ISSUES:
//    - pikchr supports the syntax `expr %`, so it is possible to write:
//         $size_percentage
//         circle "circle" radius $size_percentage %
//      The space between expr and the % is optional.
//      We currently DO NOT attempt to tokenize the "%" in this case.
//      We DO (however) tokenize percentages expressed as constants with no
//      intervening space (e.g. '50%', in which case we tokenize the entire
//      string (including the percentage symbol) as `constant.numeric`.
//    - The escape characters supported within strings may be more extensive than
//      those actually supported by pikchr.
//    - 'linrad' has been included in builtInVariables.  It is not (currently) listed
//      in the language spec but IS supported by the language and DOES appear in some
//      published examples.
//
return {
    // Set defaultToken to invalid to see what you do not tokenize yet
    //defaultToken: 'invalid',
  
    statementKeywords: ['define', 'print', 'assert'],
  
    directions: ['right', 'down', 'left', 'up'],
  
    object_classes: [
      'arc', 'arrow', 'box', 'circle', 'cylinder', 'dot', 'ellipse', 'file', 'line',
      'move', 'oval', 'spline', 'text'
    ],
  
    attributes: [
      'same', 'as', 'dashed', 'dotted', 'color', 'fill', 'behind', 'cw', 'ccw',
      'invis', 'invisible', 'thick', 'thin', 'solid', 'chop', 'fit'
    ],
    arrowAttributes: [
      '->', '<->', '<-'
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
  
    dotEdgenames: [ 
        'n', 'north', 't', 'top', 'ne', 'e', 'east', 'right', 'se', 's', 
        'south', 'bot', 'bottom', 'sw', 'w', 'west', 'left', 'nw', 'c', 
        'center', 'start', 'end'
    ],

    edgenames: [
        'n', 'north', 'ne', 'e', 'east', 'se', 's', 'south', 'sw', 'w', 'west', 'nw', 't', 'top',
        'bot', 'bottom', 'left', 'right', 'c', 'center', 'start', 'end'
    ],

    expressionKeywords: [ 
        'abs', 'cos', 'dist', 'int', 'max', 'min', 'sin', 'sqrt'
    ],
    dotExpressionKeywords: [
        'x', 'y'
    ],
    
    dotProperties: [
        'color', 'dashed', 'diameter', 'dotted', 'fill', 'ht', 'height', 'rad', 
        'radius', 'thickness', 'wid', 'width'
    ],

    operators: [
      '=', '+=', '-=', '*=', '/=', '+', '-', '*', '/', '<', '>'
    ],

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

    numberWithUnits: /((\d+(\.\d+)?)|(\.?\d+))(in|cm|px|pt|pc|mm)/,

    numberPercentage: /((\d+(\.\d+)?)|(\.?\d+))%/,

    // we include these common regular expressions
    symbols:  /[=><!~?:&|+\-*\/\^%]+/,
 
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  
    // The main tokenizer for our languages
    tokenizer: {
      root: [

        // Label declarations of the form '<label>:'       
        [/^[A-Z][\w_]*(?=:)/, 'entity.name.function' ], 

        // Camel case colors
        [/[A-Z]\w*/, { cases: { 
            '@colorsCamelCase': 'constant.language',
            // A word that begins with a capital and is not
            // a CamelCase color is assumed to be a Label reference
            '@default': 'entity.name.function'  // Labels
        }}],

        // Dotted suffixes
        [/(\.)([a-z][\w$]*)/,
          [
            // The dot
            'delimiter',
            // Text after the dot 
            { cases: {
              '@dotEdgenames': 'variable.parameter',
              '@dotProperties': 'variable.parameter',
              '@dotExpressionKeywords': 'variable.parameter',
            }}
          ]
        ],

        // Arrow tip direction attributes
        [/(<->?|<?->)/, {cases: {'@arrowAttributes': 'keyword'}}],
  
        // identifiers and keywords
        [/[a-z_$][\w$]*/, { cases: { '@colorsLowerCase': 'constant.language',
                                     '@statementKeywords': 'keyword',
                                     '@directions': 'keyword',
                                     '@object_classes': 'support.function',
                                     '@attributes': 'keyword',
                                     '@numericProperties': 'keyword',
                                     '@pathAttributes': 'keyword',
                                     '@compassDirection': 'keyword',
                                     '@locationAttribute': 'keyword',
                                     '@position': 'keyword',
                                     '@whichWayFrom': 'keyword',
                                     '@place': 'keyword',
                                     '@labelKeywords': 'keyword',
                                     '@nthObject': 'keyword',
                                     '@edgenames': 'keyword',
                                     '@expressionKeywords': 'support.function',
                                     '@builtInVariables': 'keyword',
                                     '@specialVariables': 'keyword',
                                     '@textAttributes': 'keyword',
                                     '@default': 'identifier' } }],

        // whitespace
        { include: '@whitespace' },
  
        // delimiters and operators
        [/[{}()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [/@symbols/, { cases: { '@operators': 'operator',
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

      comment: [
        [/[^\/*]+/, 'comment' ],
        [/\/\*/,    'comment', '@push' ],    // nested comment
        ["\\*/",    'comment', '@pop'  ],
        [/[\/*]/,   'comment' ]
      ],
  
      string: [
        [/[^\\"]+/,  'string'],
        [/@escapes/, 'string.escape'],
        [/\\./,      'string.escape.invalid'],
        [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]
      ],
  
      whitespace: [
        [/[ \t\r\n]+/, 'white'],
        [/\/\*/,       'comment', '@comment' ],   // '/*  */' Block comments
        [/(^#.*$)/,    'comment'],                // '#'  Single-line comments
        [/\/\/.*$/,    'comment'],                // '//' Single-line comments
      ],
    },
  };
