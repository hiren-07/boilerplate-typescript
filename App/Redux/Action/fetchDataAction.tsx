import { FETCH_DATA_REQUEST,FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS } from "../constant";

export const fetchDataAction = (page:number)=>{
    return (dispatch: (arg0: { type: string; }) => void) => {
        dispatch({type:FETCH_DATA_REQUEST})

        function generateRandomId() {
            return Math.floor(10000 + Math.random() * 90000);
        }
        
        function getRandomAge() {
            return Math.floor(18 + Math.random() * 50);
        }
        
        const occupations = ["Software Engineer", "Doctor", "Teacher", "Artist", "Lawyer", "Nurse", "Architect", "Accountant", "Scientist", "Musician"];
        const companies = ["TechCorp", "HealthCare Inc.", "EduWorld", "ArtStudio", "LawFirm LLC", "Hospital", "DesignBuild", "FinancePros", "LabTech", "MusicWorks"];
        
        function getRandomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }
        
        const responseData = [
            {
                id: generateRandomId(),
                name: "John Doe",
                phone: "555-1234",
                address: "123 Main St",
                email: "john.doe@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Jane Smith",
                phone: "555-5678",
                address: "456 Oak St",
                email: "jane.smith@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Mike Johnson",
                phone: "555-8765",
                address: "789 Pine St",
                email: "mike.johnson@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Emily Davis",
                phone: "555-4321",
                address: "321 Elm St",
                email: "emily.davis@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Chris Brown",
                phone: "555-9101",
                address: "654 Maple St",
                email: "chris.brown@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Sarah Wilson",
                phone: "555-3030",
                address: "987 Cedar St",
                email: "sarah.wilson@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "David Lee",
                phone: "555-9090",
                address: "321 Birch St",
                email: "david.lee@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Laura White",
                phone: "555-1212",
                address: "654 Spruce St",
                email: "laura.white@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "James Harris",
                phone: "555-3434",
                address: "987 Fir St",
                email: "james.harris@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            },
            {
                id: generateRandomId(),
                name: "Anna Martin",
                phone: "555-5656",
                address: "123 Ash St",
                email: "anna.martin@example.com",
                age: getRandomAge(),
                occupation: getRandomItem(occupations),
                company: getRandomItem(companies)
            }
        ];
        

        const totalPage = 8;

        setTimeout(() => {
            dispatch({type:FETCH_DATA_SUCCESS,payload:responseData,page:page,totalPage:totalPage})
        }, 3000);

    }
}