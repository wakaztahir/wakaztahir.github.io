func GlobalStyles(page : &mut HtmlPage) {
    #html {
        <style>{"""
          :root {
            --bg-color: #ffffff;
            --text-color: #2c3e50;
            --secondary-bg: rgba(255, 255, 255, 0.6);
            --accent-color: #106962;
            --card-bg: rgba(255, 255, 255, 0.7);
          }

          .dark {
            --bg-color: #1a1a1a;
            --text-color: #ecf0f1;
            --secondary-bg: rgba(43, 58, 66, 0.9);
            --accent-color: #1abc9c;
            --card-bg: rgba(43, 58, 66, 0.8);
          }

          html, body {
            padding: 0;
            margin: 0;
            font-family: 'Raleway', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          * {
            box-sizing: border-box;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            font-family: inherit;
          }
          
          .parallax-content {
            position: relative;
            z-index: 1;
          }
        """}</style>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap" rel="stylesheet" />
        </head>
    }
}