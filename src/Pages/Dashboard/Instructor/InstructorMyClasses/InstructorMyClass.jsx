import GetClasses from "../../../../Hooks/GetClasses/GetClasses";


const InstructorMyClass = () => {
    const [classes] = GetClasses();

    console.log(classes)
    return (
        <div>
            <h1>InstructorMy Class {classes.name}</h1>
        </div>
    );
};

export default InstructorMyClass;