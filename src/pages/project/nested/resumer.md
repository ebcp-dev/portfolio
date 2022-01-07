---
layout: ../../../layouts/project.astro
title: Resumer.xyz
client: Self
publishDate: 2020
img: ../../../../public/assets/resumer-ss.png
description: |
  A FullStack JavaScript web app with Express and React.
tags:
  - 2020
  - Express
  - React
  - Redux
  - PostgreSQL
  - ag‑Grid
  - Travis CI
---

A full stack web app where users can create profiles and keep track of their
job applications. Powered by an Express REST API and a PostgreSQL database on Amazon
RDS.

The user interface was developed with React, Redux and Axios to send HTTP requests to the Express API. Passport.js handles authentication with JSON Web Tokens. Tested using Mocha, Chai and deployed with continuous integration using Travis CI.

This application uses ag‑Grid to display the user's jobs in an interactive data table. Chart.js is used to display job application statistics. All styling is mostly done using Bulma.

I primarily started on this project in order to learn how to use ag-Grid as it is a commonly used as a data table.
