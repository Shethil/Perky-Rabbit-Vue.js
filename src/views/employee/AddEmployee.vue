<template>
    <div class="add-container mt-5 mb-5">
        <h2>Add Employee</h2>

        <form @submit.prevent="addEmployee">
            <label for="name">Name:</label>
            <input v-model="newEmployee.name" type="text" required>

            <label for="email">Email:</label>
            <input v-model="newEmployee.email" type="email" required>

            <label for="phone">Phone:</label>
            <input v-model="newEmployee.phone" type="tel" required>

            <label for="address">Address:</label>
            <input v-model="newEmployee.address" type="text" required>

            <label for="department">Department:</label>
            <select v-model="newEmployee.department" required>
                <option value="">Select Department</option>
                <option v-for="department in departments" :key="department" :value="department">{{ department }}</option>
            </select>

            <label for="achievements">Achievements:</label>
            <div v-for="(achievement, index) in newEmployee.achievements" :key="index">
                <input v-model="achievement.name" type="text" placeholder="Achievement Name" required>
                <input v-model="achievement.date" type="date" placeholder="Achievement Date" required>
                <button type="button" @click="removeAchievement(index)">Remove</button>
            </div>
            <button type="button" @click="addAchievement">Add Achievement</button>

            <button type="submit">Add Employee</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            newEmployee: {
                name: '',
                email: '',
                phone: '',
                address: '',
                department: '',
                achievements: [{ name: '', date: '' }],
            },
            departments: ['HR', 'IT', 'Finance', 'Marketing'],
        };
    },
    methods: {
        addEmployee() {
            console.log('New Employee:', this.newEmployee);
            this.resetForm();
        },
        addAchievement() {
            this.newEmployee.achievements.push({ name: '', date: '' });
        },
        removeAchievement(index) {
            this.newEmployee.achievements.splice(index, 1);
        },
        resetForm() {
            this.newEmployee = {
                name: '',
                email: '',
                phone: '',
                address: '',
                department: '',
                achievements: [{ name: '', date: '' }],
            };
        },
    },
};
</script>
  
<style scoped>
.add-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
    display: grid;
    gap: 10px;
    max-width: 400px;
    margin: auto;
}

label {
    font-weight: bold;
}

input,
select,
textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    margin-top: 10px;
}
</style>
  