import React from 'react';

//so that I don't have to write it at the bottom
export default class TheFooter extends React.Component {

    render() {
        return (
            <div width='100%' className="py-5 footer">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; MedTV 2019</p>
                </div>
            </div>
        )
    }
}