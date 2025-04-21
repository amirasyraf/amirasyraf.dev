let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const randomValue = Math.floor(Math.random() * 37);

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Auckland, New Zealand',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [
    'search-bar',
    'config-tab',
    'status-bar',
    'current-time',
    'weather-forecast',
    // 'tabs-list',
  ],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Hello",
      background_url: `src/img/banners/${randomValue}.gif`,
      categories: [{
        name: "ABOUT ME",
        links: [
          {
            name: "My name is Amir, and I am an AWS Cloud Consultant with 6+ years of industry experience currently specializing in cloud infrastructure and DevOps with background in SWE",
            url: "#",
            icon: "keyboard",
            icon_color: "#cccccc",
          }
        ],
      }, {
        name: "WEBSITES",
        links: [
          {
            name: "amirasyraf.dev",
            url: "https://amirasyraf.dev",
            icon: "flower",
            icon_color: "#e78a4e",
          },
          {
            name: "blog.amirasyraf.com",
            url: "https://blog.amirasyraf.com",
            icon: "writing-sign",
            icon_color: "#a9b665",
          },
          {
            name: "gallery.amirasyraf.com",
            url: "https://gallery.amirasyraf.com",
            icon: "photo",
            icon_color: "#ba5059",
          },
          {
            name: "memos.amirasyraf.com",
            url: "https://memos.amirasyraf.com",
            icon: "message",
            icon_color: "#085fb4",
          },
        ],
      }],
    }
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
