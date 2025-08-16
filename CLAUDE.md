# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a FizzBuzz kata repository designed to teach Test-Driven Development (TDD) and professional software development practices to beginners with basic JavaScript knowledge.

## Key Commands

### Development
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode (use during TDD)
- `npm run test:coverage` - Check test coverage
- `npm run lint` - Check code quality
- `npm run format` - Auto-format code
- `npm run serve` - Start local web server on port 8080

### Git Workflow
- Always commit after each passing test during TDD
- Use conventional commits: `feat:`, `fix:`, `test:`, `refactor:`, `docs:`
- Create feature branches for new work: `feature/`, `fix/`, `docs/`

## Project Structure

- `src/fizzbuzz.js` - Core FizzBuzz logic (initially empty for TDD)
- `test/fizzbuzz.test.js` - Test file with first test pre-written
- `index.html` - Visual web interface
- `app.js` - Connects web interface to FizzBuzz logic
- `style.css` - Styling with customizable themes
- `docs/` - Comprehensive tutorials for learning

## TDD Workflow

1. Write a failing test
2. Write minimal code to pass
3. Refactor if needed
4. Commit with descriptive message
5. Push to GitHub

## Important Context

- This is a learning project - prioritize clarity over cleverness
- The web interface is intentionally beautiful to engage creative and visual interests
- Tests should be added incrementally following the TDD tutorial
- The project includes GitHub Actions for CI/CD
- Encourage customization of visual elements

## Current State

- Basic project structure is set up
- First test is written but failing (intentionally)
- Web interface is complete but not connected to logic
- Student should start with `docs/TDD_TUTORIAL.md`