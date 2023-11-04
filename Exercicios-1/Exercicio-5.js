const contacts = [];
let idCounter = 0;

class Contact {
    Nome = ""
    Email = ""
    Telefone = ""
    Categoria = ""
    Id = ""
    
    constructor(name, email, tel, catg) {
        this.Nome = name;
        this.Email = email;
        this.Telefone = tel;
        this.Categoria = catg;
        this.Id = idCounter++;
    }
}

const makeContact = (name, email, tel, catg) => {
    const contact = new Contact(name, email, tel, catg);
    return postContact(contact);
}

const postContact = (contact) => {
    contacts.push(contact);
    return contacts
}

makeContact("Lucas", "lucas@lucas", "(31) 9 9394-4834", "Família")
makeContact("Yago", "lucas@lucas", "(31) 9 9394-4834", "Família")
makeContact("Lucas", "lucas@lucas", "(31) 9 9394-4834", "Família")

const updateContact =  (contactName, newData) => {
    const foundContact = contacts.find((contact) => contact.Nome === contactName);
    Object.assign(foundContact, newData);
    return contacts
}

const james = new Contact("James", "James@gmail.com", "3114251551", "Trabalho")

updateContact("Yago", james)

const filterContactsByCatg = (category) =>{
    const foundContacts = contacts.filter((contact) => contact.Categoria === category)
    if (!foundContacts){
        return "Contacts not found"
    }
    return foundContacts
}

filterContactsByCatg("Trabalho")

const findContactByEmail = (email) => {
    const foundContact = contacts.find((contactByEmail) => contactByEmail.Email === email)
    if (!foundContact){
        return "Contact not found"
    }
    return foundContact
}



const deleteContact = (contactName) => {
    const foundContact = contacts.findIndex((contact) => contact.Nome === contactName)
    if (!foundContact) {
        return "Contact not found"
    }
    contacts.splice(foundContact , 1)
    return contacts
}

console.log(deleteContact("James"))