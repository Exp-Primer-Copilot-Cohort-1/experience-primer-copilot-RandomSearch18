function skillsMember() {
    const skills = ["HTML", "CSS", "JS", "React", "Node", "Python", "Django"];
    console.log(skills);

    return skills;
}

function skillsMemberAlt() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JS", "React", "Node"],
        address: {
            city: "New York",
            country: "USA"
        },
        getAge: function () {
            return this.age;
        }
    }
    console.log(member.getAge());
    console.log(member.skills);
    console.log(member.address.city);
}