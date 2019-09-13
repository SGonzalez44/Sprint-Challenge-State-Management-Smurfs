1. Context API solves the isue of state management spot on. Although it is difficult to grasp at first I now see redux API as like a building block API where you need to invoke your functions so that they all align with each other and then get to work!!


-----Actions might look difficult but theyre simple enough once you understand the role they plain the the process:
    -action type
    -action creator
    -action


-----Reducers are extremely powerful being able to intercept information and shoot up to the store


-----Store is amazing, being able to create one via redux is pretty cool once you fully understand all thats going on.


- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

The state in an application is the state at any given point and time
The state in a component is storedlocally within a component and is not accessible from other components unless you explicitly pass it 


- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows our reducer to look for and return to us a modified state AND it allows our action creator to retrieve a function

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

Hooks is number one forsure I feel like its definatly sexier to look at but redux is growing on me being that I actually know whats going on now and its freakin amazing!
