<script setup lang="ts">
import { useStepStore } from "@/stores/StepStore";

interface InputFormData extends FormData {
  data: {
    name: string;
    file: File;
  }[];
}

const submitHandler = async (file: InputFormData) => {
  const formData = new FormData();
  formData.append("name", file.data[0].name);
  formData.append("data", file.data[0].file);

  const allowedExtensions = /(\.csv)$/i;

  if (!allowedExtensions.exec(file.data[0].name)) {
    alert("Please select a .csv file.");
  } else {
    const counterStore = useStepStore();
    counterStore.nextStep();
  }
};
</script>

<template>
  <div class="lg:mx-20">
    <FormKit type="form" @submit="submitHandler">
      <FormKit
        type="file"
        name="data"
        validation="required|not:Admin"
        :validation-messages="{ required: 'Please select a .csv file.' }"
        label="Bus stop data"
        multiple="false"
        accept=".csv"
        help="Insert CSV with bus stops data"
      />
    </FormKit>
  </div>
</template>

<style scoped>
FormKit {
  width: 80% !important;
}
</style>
