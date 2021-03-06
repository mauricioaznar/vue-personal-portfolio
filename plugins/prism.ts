import Prism from 'prismjs'

// Include a theme
import 'prismjs/themes/prism-tomorrow.css'

// Include the toolbar plugin: (optional)
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'

// Include the line numbers plugin: (optional)
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// Include the line highlight plugin: (optional)
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

// Include some other plugins: (optional)
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
import 'prismjs/plugins/show-language/prism-show-language'

// Include additional languages
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-shell-session.js'
import 'prismjs/components/prism-nginx.js'
import 'prismjs/components/prism-d.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-tsx.js'
import 'prismjs/components/prism-sql.js'

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup

export default Prism
