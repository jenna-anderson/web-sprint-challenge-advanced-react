# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    Stateful (class) components can use stateful logic (manipulate data) while functional components are presentational (just display data).

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    A componentWillMount function will be called right before a component is rendered.
    A componentWillUpdate function is called before the re-render of a component after setState is called and data is changed.

3. Define stateful logic.
    Stateful logic is code that manipulates data.

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange: Render element(s) to the DOM. 
    Act: Execute specific user action(s).
    Assert: Check to see if what you expect to see on the screen after the user actions occur is in fact on the screen.
