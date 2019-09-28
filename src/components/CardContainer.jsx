import React from 'react';
// import { Card } from './Card';

// export class CardContainer extends React.Component {
//     render() {
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col'>1</div>
//                     <div className='col'>2</div>
//                     <div className='col'>3</div>
//                 </div>
//                 <div className='row'>
//                     <div className='col'>4</div>
//                     <div className='col'>5</div>
//                     <div className='col'>6</div>
//                 </div>
//                 <div className='row'>
//                     <div className='col'>7</div>
//                     <div className='col'>8</div>
//                     <div className='col'>9</div>
//                 </div>
//                 <div className='row'>
//                     <div className='col'>10</div>
//                     <div className='col'>11</div>
//                     <div className='col'>12</div>
//                 </div>
//             </div>
//         );
//     }
// };

export function Container({ children }){
    return <div className="container-fluid">{children}</div>;
}

export function Row({ children }){
    return <div className="row">{children}</div>;
}

export function Col({ children }){
    return (
        <div className="col">{children}</div>
    )
}