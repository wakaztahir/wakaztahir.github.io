func GlobalStyles(page : &mut HtmlPage) {
    #html {
        <style>{"""
          :root {
            --bg-color: #f8fafc;
            --text-color: #0f172a;
            --secondary-bg: #ffffff;
            --accent-color: #0f172a;
            --card-bg: #ffffff;
            --icon-fill: #334155;
            --accent-gradient: linear-gradient(135deg, #0f172a 0%, #334155 100%);
          }

          .dark {
            --bg-color: #020617;
            --text-color: #f1f5f9;
            --secondary-bg: #0f172a;
            --accent-color: #f1f5f9;
            --card-bg: #0f172a;
            --icon-fill: #94a3b8;
            --accent-gradient: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          }

          html, body {
            padding: 0;
            margin: 0;
            font-family: 'Inter', 'Raleway', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            -webkit-font-smoothing: antialiased;
          }

          /* Modern Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: var(--bg-color);
          }
          ::-webkit-scrollbar-thumb {
            background: var(--icon-fill);
            border-radius: 10px;
            opacity: 0.3;
          }
          ::-webkit-scrollbar-thumb:hover {
            opacity: 0.5;
          }

          * {
            box-sizing: border-box;
          }

          a {
            color: inherit;
            text-decoration: none;
            transition: opacity 0.2s ease;
          }
          
          a:hover {
            opacity: 0.7;
          }

          button {
            font-family: inherit;
          }
        """}</style>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />
        </head>
    }
}