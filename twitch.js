const client = new tmi.Client({
  channels: ["mikebruty", "raziqul"],
});

client.connect();

client.connect();

client.on("message", (channel, tags, message, self) => {
  // "Alca: Hello, World!"
  if (message.match(/!drop.*/)) {
    const name = tags["display-name"];
    const emojiId = Object.keys(tags.emotes)[0];
    console.log(createEmoteUrl(emojiId));
    plane.toDrop[name] = new Person(name, createEmoteUrl(emojiId));
  }
});

function createEmoteUrl(id) {
  return `https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/dark/3.0`;
}
