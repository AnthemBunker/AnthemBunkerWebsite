<template>
    <div id="dashboard-section">
        <div id="content">
            <h1>Live Video Stream Demo</h1>
            
            <video src="rtsp://207.70.170.170/cam/realmonitor?channel=1&subtype=0">
                Your browser does not support RTP streams.
            </video>
        </div>
    </div>
</template>

<script>
export default {
  name: "DashboardSection"
};
</script>

<style scoped>
#dashboard-section {
  padding: 50px;
}

h1 {
  text-align: center;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>