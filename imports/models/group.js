// jshint esversion: 6

class Group {
  constructor(id, name, type, administrators,
              description, channels,  moderators) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.administrators = administrators;
    this.description = description;
    this.channels = channels;
    this.moderators = moderators;
  }
}

export default Group;
