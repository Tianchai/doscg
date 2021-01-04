<template>
  <article class="py-sm-4" id="task-2">
    <div class="container p-4 bg-white border">
      <p class="display-4">Task 2</p>
      <p class="h5 mb-3">
        If A = 21, A + B = 23, A + C = -21,
        please create a new function for finding B and C value
      </p>
      <b-form @submit.prevent="onSubmit">
        <div class="form-row align-items-center">
          <div v-for="(input, index) in form" :key="index" class="col-12 col-md">
            <b-input-group class="mb-3 mb-md-0">
              <template #prepend>
                <b-input-group-text class="justify-content-center w-60px">
                  {{ input.label }}
                </b-input-group-text>
              </template>
              <b-form-input v-model="input.value" type="number" @input="clearResult"></b-form-input>
            </b-input-group>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary" :disabled="isLoading">Solve</button>
          </div>
          <div class="col-auto col-md-12" v-if="showResult">
            <h5 class="text-success mt-md-3 mb-0">
              B = {{ this.result.b }},
              C = {{ this.result.c }}
            </h5>
          </div>
        </div>
      </b-form>
    </div>
  </article>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Task-2',
  data() {
    return {
      isLoading: false,
      showResult: false,
      form: {
        a: {
          label: 'A',
          value: 21,
        },
        ab: {
          label: 'A+B',
          value: 23,
        },
        ac: {
          label: 'A+C',
          value: -21,
        },
      },
      result: {
        b: null,
        c: null,
      },
    };
  },
  methods: {
    clearResult() {
      this.showResult = false;
      this.result.b = null;
      this.result.c = null;
    },
    onSubmit() {
      this.showResult = false;
      const body = {
        a: this.form.a.value,
        ab: this.form.ab.value,
        ac: this.form.ac.value,
      };
      this.isLoading = true;
      axios.post('http://localhost:8000/doscg/task-2', body)
        .then((res) => {
          const data = res.data;
          this.result.b = data.b;
          this.result.c = data.c;
          this.showResult = true;
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
