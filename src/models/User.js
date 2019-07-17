class User {
    constructor(firstName, lastName, email, dob, picture, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dobObj = dob;
        this.picture = picture;
        this.gender = gender;
        this.fullName = this.getFullName();
        this.emailEncrypted = this.hideEmailAddress();
        this.dob = this.getDOB();
    }

    getDOB() {
        return `${this.dobObj.getDate()}.${this.dobObj.getMonth() + 1}.${this.dobObj.getFullYear()}`
    }

    hideEmailAddress() {
        const email = this.email.split('@');
        const emailLast = email[0].slice(-2);
        const emailFirst = email[0].slice(0, 3);
        const hiddenEmail = `${emailFirst}...${emailLast}@${email[1]}`
        return hiddenEmail;
    }

    getFullName() {
        const capitalize = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        return `${capitalize(this.firstName)} ${capitalize(this.lastName)}`
    }
}

export default User