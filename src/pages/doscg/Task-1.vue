<template>
  <article class="py-sm-4" id="task-1">
    <div class="container p-4 bg-white border">
      <p class="display-4">Task 1</p>
      <p class="h5 mb-3">
        X, Y, 5, 9, 15, 23, Z<br>
        Please create a new function for finding X, Y, Z value
      </p>
      <b-form @submit.prevent="onSubmit">
        <div class="form-row align-items-center">
          <div v-for="(input, index) in form" :key="index" class="col">
            <b-form-input
              v-model="form[index]"
              type="number"
              class="text-center mb-3"
              ref="digit"
            ></b-form-input>
          </div>
          <div class="col-12 text-center">
            <button
              type="submit"
              class="btn btn-primary mx-2"
              :disabled="isLoading"
            >
              Solve
            </button>
            <button
              type="button"
              class="btn btn-danger mx-2"
              :disabled="isLoading"
              @click="onReset"
            >
              Reset
            </button>
          </div>
        </div>
      </b-form>
    </div>
  </article>
</template>

<script>
import axios from 'axios';

const defaultForm = {
  0: '',
  1: '',
  2: 5,
  3: 9,
  4: 15,
  5: 23,
  6: '',
};

export default {
  name: 'Task-2',
  data() {
    return {
      isLoading: false,
      showResult: false,
      form: {
        0: '',
        1: '',
        2: 5,
        3: 9,
        4: 15,
        5: 23,
        6: '',
      },
    };
  },
  methods: {
    onReset() {
      Object.entries(defaultForm).forEach(([key, value]) => {
        this.form[key] = value;
      });
    },
    onSubmit() {
      const body = this.form;
      this.isLoading = true;
      axios.post('http://localhost:8000/doscg/task-1', body)
        .then((res) => {
          Object.entries(res.data).forEach(([key, value]) => {
            this.form[key] = value;
          });
          this.isLoading = false;
        })
        .catch((err) => {
          console.log('err', err);
          this.isLoading = false;
        });
    },
  },
};
</script>
