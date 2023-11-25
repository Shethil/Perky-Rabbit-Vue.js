<template>
    <div>
        <h2 class="mt-5 mb-5">Employee List</h2>

        <div class="mb-5">
            <label for="filter">Filter by Department:</label>
            <select v-model="selectedDepartment" @change="filterEmployees">
                <option value="">All Departments</option>
                <option v-for="department in departments" :key="department" :value="department">{{ department }}</option>
            </select>
        </div>

        <div class="container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Achievements</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in filteredEmployees" :key="employee.id">
                        <td>{{ employee.name }}</td>
                        <td>{{ employee.email }}</td>
                        <td>{{ employee.phone }}</td>
                        <td>{{ employee.address }}</td>
                        <td>{{ employee.department }}</td>
                        <td>{{ employee.achievements }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-5">
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
    </div>
</template>
  
<script>
export default {

    name: 'Employee_page',

    data() {
        return {
            employees: [
                { id: 1, name: 'Shethil', email: 'shithelahammed@gmail.com', phone: '01955199791', address: 'DIT PROJEECT, MERUL BADDA DHAKA -1212', department: 'IT', achievements: 'Employee of the Month' },
                { id: 2, name: 'Abcdjr', email: 'absgc@gmail.com', phone: '01928374625', address: 'DHAKA -1212', department: 'HR', achievements: 'Employee of the Month' },
                { id: 3, name: 'Dbabxu', email: 'laueyqa@gmail.com', phone: '02837452836', address: 'DHAKA -1213', department: 'Marketing', achievements: 'Employee of the Month' },
                { id: 4, name: 'Lhduat', email: 'smchjshyscbs@gmail.com', phone: '01726482736', address: 'DHAKA -1214', department: 'HR', achievements: 'Employee of the Month' },
                { id: 5, name: 'Mdhtuea', email: 'alcbwjdwe@gmail.com', phone: '01289277364', address: 'DHAKA -1215', department: 'IT', achievements: 'Employee of the Month' },
                { id: 6, name: 'Lagdtr', email: 'ddasdsadcas@gmail.com', phone: '019278372672', address: 'DHAKA -1216', department: 'IT', achievements: 'Employee of the Month' },
                { id: 7, name: 'Lgdjeiw', email: 'dsjdbqwdkqwd@gmail.com', phone: '01827364509', address: 'DHAKA -1217', department: 'Marketing', achievements: 'Employee of the Month' },
            ],
            departments: ['HR', 'IT', 'Marketing'],
            selectedDepartment: '',
            itemsPerPage: 5,
            currentPage: 1,
        };
    },
    computed: {
        filteredEmployees() {
            return this.employees.filter(employee => !this.selectedDepartment || employee.department === this.selectedDepartment);
        },
        totalPages() {
            return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
        },
    },
    methods: {
        filterEmployees() {
            this.currentPage = 1;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage += 1;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
            }
        },
    },
};
</script>
  
<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
</style>
  