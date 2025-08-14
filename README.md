## Description

## Task Management API - Onboarding Project

### User Story

**As a busy professional, I want a smart task management system that helps me organize my work effectively. I should be able to create and categorize my tasks, track their progress, and get intelligent assistance with planning and task breakdown. The system should understand my workflow and help me be more productive by suggesting better ways to structure my work.**

### Technical Stack
- NestJS framework
- TypeORM for database operations
- PostgreSQL
- LLM API (Gemini has a good free tier)
- Swagger for API documentation

### Core Requirements

**Database Design:**
- Design and implement entities for tasks and categories using TypeORM
- Establish appropriate relationships between entities
- Consider what fields would be essential for a real-world task management system
- Think about data validation and constraints

**API Development:**
- Implement full CRUD operations following RESTful principles
- Design endpoints that would be intuitive for frontend developers to consume
- Include advanced features like filtering, sorting, and pagination
- Handle edge cases and provide meaningful error messages
- Consider what HTTP status codes are appropriate for different scenarios
- Create comprehensive API documentation with Swagger

### LLM Integration (Choose 1-2 features):

1. **Smart Task Breakdown**
    - Take a high-level task and intelligently break it into actionable subtasks
    - **Example:** Input: "Launch new website" → Output: ["Design wireframes", "Set up hosting", "Implement frontend", "Configure domain", "Test all features"]
2. **Task Enhancement**
    - Transform vague task descriptions into detailed, actionable items
    - **Example:** Input: "Fix bugs" → Output: "Review bug reports from last sprint, prioritize critical issues, create tickets for each bug with reproduction steps"
3. **Daily Planning Assistant**
    - Analyze a user's task backlog and generate intelligent daily plans
    - **Example:** Input: 10 tasks with various priorities → Output: "Start with high-priority Task A (2 hours), then medium-priority Task B (1 hour), save quick Task C for after lunch"
4. **Task Analysis & Insights**
    - Provide intelligent analysis of task patterns, bottlenecks, or productivity insights
    - **Example:** "You have 5 overdue tasks in the 'Development' category. Consider breaking large tasks into smaller ones."

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
