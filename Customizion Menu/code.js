const c = webpackChunkdiscord_app.push([[Symbol()], {}, ({c}) => Object.values(c)]); const u = c.find(x => x?.exports?.Z?.getUserProfile).exports.Z; const m = c.find(x => x?.exports?.Z?.getCurrentUser).exports.Z.getCurrentUser(); 
const oldName = m.username + "#" + m.discriminator;
function getBadges(){
    u.getUserProfile(m.id).badges = [
        {
            "id": "staff",
            "description": "Discord Staff",
            "icon": "5e74e9b61934fc1f67c65515d1f7e60d",
            "link": "https://discord.com/company"
        },
        {
            "id": "partner",
            "description": "Partnered Server Owner",
            "icon": "3f9748e53446a137a052f3454e2de41e",
            "link": "https://discord.com/partners"
        },
        {
            "id": "certified_moderator",
            "description": "Moderator Programs Alumni",
            "icon": "fee1624003e2fee35cb398e125dc479b",
            "link": "https://discord.com/safety"
        },
        {
            "id": "hypesquad",
            "description": "HypeSquad Events",
            "icon": "bf01d1073931f921909045f3a39fd264",
            "link": "https://discord.com/hypesquad"
        },
        {
            "id": "hypesquad_house_1",
            "description": "HypeSquad Bravery",
            "icon": "8a88d63823d8a71cd5e390baa45efa02",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "hypesquad_house_2",
            "description": "HypeSquad Brilliance",
            "icon": "011940fd013da3f7fb926e4a1cd2e618",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "hypesquad_house_3",
            "description": "HypeSquad Balance",
            "icon": "3aa41de486fa12454c3761e8e223442e",
            "link": "https://discord.com/settings/hypesquad-online"
        },
        {
            "id": "bug_hunter_level_1",
            "description": "Discord Bug Hunter",
            "icon": "2717692c7dca7289b35297368a940dd0",
            "link": "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs"
        },
        {
            "id": "bug_hunter_level_2",
            "description": "Discord Bug Hunter",
            "icon": "848f79194d4be5ff5f81505cbd0ce1e6",
            "link": "https://support.discord.com/hc/en-us/articles/360046057772-Discord-Bugs"
        },
        {
            "id": "active_developer",
            "description": "Active Developer",
            "icon": "6bdc42827a38498929a4920da12695d9",
            "link": "https://support-dev.discord.com/hc/en-us/articles/10113997751447?ref=badge"
        },
        {
            "id": "verified_developer",
            "description": "Early Verified Bot Developer",
            "icon": "6df5892e0f35b051f8b61eace34f4967"
        },
        {
            "id": "early_supporter",
            "description": "Early Supporter",
            "icon": "7060786766c9c840eb3019e725d2b358",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "premium",
            "description": "Subscriber since Dec 22, 2016",
            "icon": "2ba85e8026a8614b640c2837bcdfe21b",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl1",
            "description": "Server boosting since May 4, 2023",
            "icon": "51040c70d4f20a921ad6674ff86fc95c",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl2",
            "description": "Server boosting since Mar 11, 2023",
            "icon": "0e4080d1d333bc7ad29ef6528b6f2fb7",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl3",
            "description": "Server boosting since Feb 23, 2023",
            "icon": "72bed924410c304dbe3d00a6e593ff59",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl4",
            "description": "Server boosting since Sep 17, 2022",
            "icon": "df199d2050d3ed4ebf84d64ae83989f8",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl5",
            "description": "Server boosting since Aug 1, 2022",
            "icon": "996b3e870e8a22ce519b3a50e6bdd52f",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl6",
            "description": "Server boosting since Mar 26, 2022",
            "icon": "991c9f39ee33d7537d9f408c3e53141e",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl7",
            "description": "Server boosting since Feb 4, 2022",
            "icon": "cb3ae83c15e970e8f3d410bc62cb8b99",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl8",
            "description": "Server boosting since Nov 26, 2021",
            "icon": "7142225d31238f6387d9f09efaa02759",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "guild_booster_lvl9",
            "description": "Server boosting since Sep 6, 2020",
            "icon": "ec92202290b48d0879b7413d2dde3bab",
            "link": "https://discord.com/settings/premium"
        },
        {
            "id": "legacy_username",
            "description": "Originally known as " + oldName,
            "icon": "6de6d34650760ba5551a79732e98ed60"
        },
        {
            "id": "bot_commands",
            "description": "Supports Commands",
            "icon": "6f9e37f9029ff57aef81db857890005e",
            "link": "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps?ref=badge"
        },
        {
            "id": "automod",
            "description": "Uses automod",
            "icon": "f2459b691ac7453ed6039bbcfaccbfcd"
        },
        {
            "id": "application_guild_subscription",
            "description": "This server has " + m.username + " Premium",
            "icon": "d2010c413a8da2208b7e4f35bd8cd4ac"
        }
    ];
}

function getPomelo(){
    m.discriminator = "0";
}

let type = "normal"; // normal or error, see usage



function openPopup() {
  var popupWindow = window.open("", "_blank", "width=300,height=200");

  var menuContainer = popupWindow.document.createElement("div");
  menuContainer.style.textAlign = "center";

  var button1 = popupWindow.document.createElement("button");
  button1.textContent = "Better dark mode (on)";

  var button2 = popupWindow.document.createElement("button");
  button2.textContent = "Better dark mode (off)";

  var button3 = popupWindow.document.createElement("button");
  button3.textContent = "Badges";


  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a message";
  popupWindow.document.body.appendChild(input);

  var button = document.createElement("button");
  button.textContent = "Submit";
  popupWindow.document.body.appendChild(button);

  button.addEventListener("click", function () {
    let pack = webpackChunkdiscord_app.push([[Symbol()], {}, ({c}) => Object.values(c)]);
    let channelPack = pack.find((x) => x?.exports?.Z?.getCurrentlySelectedChannelId).exports.Z; 
    let normalPack = pack.find((x) => x?.exports?.Z?.sendBotMessage).exports.Z; 
    let errorPack = pack.find((x) => x?.exports?.Z?.sendClydeError).exports.Z;
    webpackChunkdiscord_app.pop();
    let channelSelected = channelPack.getCurrentlySelectedChannelId();
    
    let message = input.value;

    if (type === "normal") {
      normalPack.sendBotMessage(channelSelected, message);
      console.log(
        `%c✅ Success\n%cMessage has been sent to channel ${channelSelected}. Please note that this only works in text channels.`,
        "font-size: 50px",
        "color: green; font-size: 18px"
      );
    } else if (type === "error") {
      errorPack.sendClydeError(channelSelected);
      console.log(
        `%c✅ Success\n%cError message has been sent to channel ${channelSelected}. Please note that this only works in text channels.`,
        "font-size: 50px",
        "color: green; font-size: 18px"
      );
    } else {
      console.log(
        `%c❌ Failure\n%cPlease use the type "normal" or "error"`,
        "font-size: 50px",
        "color: red; font-size: 18px"
      );
    }
  });

  

  // Append the buttons to the menuContainer
  menuContainer.appendChild(button1);
  menuContainer.appendChild(button2);
  menuContainer.appendChild(button3);

  // Append the menuContainer to the popup window's document body
  popupWindow.document.body.appendChild(menuContainer);

  button1.addEventListener("click", executeCode1);
  button2.addEventListener("click", executeCode2);
  button3.addEventListener("click", executeCode3);

  function executeCode1() {
    console.log("Better darkmode theme! (on)");
    document.body.classList.add("theme-amoled");
  }

  function executeCode2() {
    console.log("Better darkmode theme! (off)");
    document.body.classList.remove("theme-amoled");
  }
  function executeCode3() {
    getBadges();
    getPomelo();
    console.log("Gave all of the badges!")
    console.log("Make sure that your in your profile for this hack!")
  }
}

// Call the openPopup function when needed
openPopup();
