1. what is a flag in regEx?
   
   Flags are options that describe "the way I want the regEx to match my string". One regEx can use more than one flag. In literal notation, they are placed right after the closing slashm next to each other. In constructor mode, they are in quotes. 
   
   There are 6 flags in JS:

   - `i`: case Insenstive matching
   - `g`: looking Globally and for all matches, instead of default "return first"
   - `m`: Multiline mode, otherwise stops looking when new line
   - `s`: in this mode, `.` can match `\n`
   - `u`: full Unicode support
   - `y`: stickY mode. It searches at exact positions of a string. 

2. what does anRegEX.matchAll(aString) return ???
   
   First, if `matchAll` is called on a regex with `g` flag, an error will be thrown.

   Second, if we print its result directly, there will be nothing readable. One way to get a readable result is to print `[...aString.matchAll(anRegEx)]`. It's an array, with the first matching char, the input, the index of first matching char etc etc.
   
3. sdf