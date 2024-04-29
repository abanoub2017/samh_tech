<template>
    <el-form class="booking-form w-15 m-auto p-2  shadow rounded radius-medium" :model="form" label-width="auto"
        label-position="left">
        <!-- Booking form component -->
        <h2>{{ $t('bookingForm.title') }}</h2>
        <el-row :gutter="10" class=" align-item-center ">
            <!-- From input field -->
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item :label="$t('bookingForm.from') + ':'">
                    <el-input v-model="form.from" />
                </el-form-item>
            </el-col>
            <!-- To input field -->
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item :label="$t('bookingForm.to') + ':'">
                    <el-input v-model="form.to" />
                </el-form-item>
            </el-col>
            <!-- Trip date picker -->
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item :label="$t('bookingForm.tripDate') + ':'">
                    <el-col :span="24">
                        <el-date-picker v-model="form.tripDate" type="date" placeholder="Pick a date"
                            style="width: 100%" />
                    </el-col>
                </el-form-item>
            </el-col>
            <!-- Ticket class selection -->
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-form-item :label="$t('bookingForm.ticketClass') + ':'">
                    <el-select v-model="form.ticketClass" placeholder="please select your zone">
                        <el-option :label="$t('bookingForm.economy')" value="economy" />
                        <el-option :label="$t('bookingForm.business')" value="business" />
                        <el-option :label="$t('bookingForm.first')" value="first" />
                    </el-select>
                </el-form-item>
            </el-col>
            <!-- Trip type radio selection -->
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

                <el-form-item :label="$t('bookingForm.tripType') + ':'">
                    <el-radio-group v-model="form.tripType">
                        <el-radio border value="one-way" class="mx-1">{{ $t('bookingForm.oneWay') }}</el-radio>
                        <el-radio border value="round-trip" class="mx-1">{{ $t('bookingForm.roundTrip') }}</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
            <!-- Passengers input number fields -->
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="align-item-center ">
                <el-row :gutter="10" class="align-item-center ">
                    <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                        <label>{{ $t('bookingForm.passengers') }}: </label>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                        <el-form-item :label="$t('bookingForm.adults') + ':'" class="m-0">
                            <el-input-number v-model="form.passengers.adults" :min="1" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" class="text-center hidden-sm-only">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9">
                        <el-form-item :label="$t('bookingForm.children') + ':'" class="m-0">
                            <el-input-number v-model="form.passengers.children" :min="0" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-col>
            <!-- Submit and cancel buttons -->
            <el-col :span="24">
                <el-form-item class="my-1 pt-2">
                    <el-button type="primary" @click="onSubmit">{{ $t('bookingForm.create') }}</el-button>
                </el-form-item>
            </el-col>

        </el-row>

    </el-form>

</template>

<script setup lang="ts">
const form = reactive({
    from: '',
    to: '',
    tripDate: new Date(),
    ticketClass: 'economy',
    tripType: 'one-way',
    passengers: {
        adults: 1,
        children: 0,
    },
})
// Function to handle form submission
const onSubmit = () => {
    console.log(form);

}
</script>
<style scoped></style>