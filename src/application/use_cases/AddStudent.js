const Student= require("../../entities/Student");

module.exports= (StudentRepository, CrmServices)=>{
    async function Execute(firstName, lastName, email) {
        const student = await StudentRepository.getByEmail(email);

        if (!firstName || !lastName || !email) {
            throw new Error('validation failed');
        }

        if (student) {
            throw new Error('email already exist in the system');
        }

        let newStudent = new Student(firstName, lastName, email);

        newStudent = await StudentRepository.add(newStudent);

        await CrmServices.notify(newStudent);

        return 'student added successfully';
    }
    return {
        Execute
    };
};
