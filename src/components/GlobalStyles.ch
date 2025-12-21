func GlobalStyles(page : &mut HtmlPage) {
    #html {
        <style>{"""
          :root {
            --bg-color: #f5f6fa;
            --text-color: #2f3640;
            --secondary-bg: #ffffff;
            --accent-color: #106962;
            --card-bg: #ffffff;
            --icon-fill: #2f3640;
          }

          .dark {
            --bg-color: #1e272e;
            --text-color: #d2dae2;
            --secondary-bg: #2f3542;
            --accent-color: #1abc9c;
            --card-bg: #2f3542;
            --icon-fill: #ffffff;
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