import React from 'react';

const Register = () => {
    return (
        <div class="measur ma3">
            <label for="id" class="f6 b db mb2">Id</label>
            <input id="id" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="id-desc"/>

            <label for="name" class="f6 b db mb2">Name</label>
            <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>

            <label for="email" class="f6 b db mb2">E-Mail</label>
            <input id="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="email-desc"/>    
       </div>
    );
}

export default Register;