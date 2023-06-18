<script setup>
const lastTransitions = [{
        fullName: 'Myra Foster',
        no: '632763/C/OP/2022/04',
        gender: 'female',
        admissionDate: '2023-03-16 09:00',
    },
    {
        fullName: 'John Doe',
        no: '632763/C/OP/2022/04',
        gender: 'male',
        admissionDate: '2023-03-16 09:00',
    },
    {
        fullName: 'Myra Foster',
        no: '632763/C/OP/2022/04',
        gender: 'female',
        admissionDate: '2023-03-16 09:00',
    },
    {
        fullName: 'John Doe',
        no: '632763/C/OP/2022/04',
        gender: 'male',
        admissionDate: '2023-03-16 09:00',
    },
]

const resolveStatus = {
    Verified: 'success',
    Rejected: 'error',
    Pending: 'secondary',
}

</script>

<template>
    <VCard >
    <VTable class="w-100">
      <thead>
        <tr>
          <th style="width:45%;background:#e6e6e6">Full Name</th>
          <th style="width:12%;background:#e6e6e6">Gender</th>
          <th style="width:18%;background:#e6e6e6">Admission Date</th>
          <th style="width:30%;background:#e6e6e6">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(data, index) in lastTransitions"
          :key="index"
        >
          <td>
            <div class="d-flex align-center">
              <div class="ma-0 my-2">
                <p class="font-weight-semibold text-base mb-0 pa-0">
                  {{ data.fullName }}
                </p>
                <span class="text-xs ma-0 pa-0">No. {{ data.no }}</span>
              </div>
            </div>
          </td>
          <td >
            <span class="text-sm text-capitalize">{{ data.gender }}</span>
          </td>
          <td >
            <span class="text-xs">{{ data.admissionDate }}</span>
          </td>
          <td >
            <div class="d-flex align-center">
            <VBtn color="primary" size="small" class="text-capitalize">
              <VIcon
                start
                icon="ph:video-camera-bold"
              />
              Start Appointment
            </VBtn>

            </div>
            <!-- <span class="font-weight-semibold text-base">{{ transition.trend }}</span> -->
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
