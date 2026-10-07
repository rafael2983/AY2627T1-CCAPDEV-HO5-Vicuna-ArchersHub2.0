/* 1. CURRICULUM PROGRESS: Doughnut Chart */

const curriculumCtx =
    document.getElementById("curriculumChart");

new Chart(curriculumCtx, {

    type: "doughnut",

    data: {

        labels: [
            "Completed",
            "Remaining"
        ],

        datasets: [{
            data: [
                60,
                40
            ],

            backgroundColor: [
                "#087830",
                "#dfe8e2"
            ],

            borderWidth: 0
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "70%",

        plugins: {

            legend: {
                position: "bottom"
            }

        }
    }
});


/* 2. ENLISTMENT STATUS - Bar Chart */

const enlistmentCtx =
    document.getElementById("enlistmentChart");

new Chart(enlistmentCtx, {

    type: "bar",

    data: {

        labels: [
            "Enrolled",
            "Pending",
            "Waitlisted",
            "Dropped"
        ],

        datasets: [{

            label: "Number of Subjects",

            data: [
                5,
                2,
                1,
                1
            ],

            backgroundColor: [
                "#087830",
                "#75a987",
                "#b7cdbd",
                "#d1dcd4"
            ],

            borderRadius: 6,

            borderWidth: 0
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        scales: {

            y: {

                beginAtZero: true,

                ticks: {
                    stepSize: 1
                }

            }

        },

        plugins: {

            legend: {
                display: false
            }

        }
    }
});


/* 3. ACADEMIC PERFORMANCE - Line Chart */

const performanceCtx =
    document.getElementById("performanceChart");

new Chart(performanceCtx, {

    type: "line",

    data: {

        labels: [
            "Term 1",
            "Term 2",
            "Term 3",
            "Term 4",
            "Term 5"
        ],

        datasets: [{

            label: "GPA",

            data: [
                3.25,
                3.40,
                3.55,
                3.48,
                3.70
            ],

            borderColor: "#087830",

            backgroundColor:
                "rgba(8, 120, 48, 0.10)",

            borderWidth: 3,

            tension: 0.3,

            fill: true,

            pointRadius: 5,

            pointHoverRadius: 7
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        scales: {

            y: {

                min: 0,

                max: 4,

                ticks: {
                    stepSize: 0.5
                }

            }

        },

        plugins: {

            legend: {
                position: "bottom"
            }

        }
    }
});
