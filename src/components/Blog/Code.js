import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import PrismJsx from 'prismjs/components/prism-jsx.min'

/* eslint no-unused-vars: 0 */

// https://dev.to/amitchauhan/syntax-highlighting-with-prismjs-and-react-1lep

const Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export default Code
