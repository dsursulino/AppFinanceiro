import React, { Component, ReactNode } from 'react';

type Props = {
  imagem: any,
  children: ReactNode
}



export class ContentEtapas extends Component<Props> {
  render() {
    return (
      <div className="w-full mx-auto h-full ">
        <div className="flex justify-center px-6 my-2 h-full">
          <div className="w-full  flex">
            <div className="w-full h-auto flex  items-end hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
              <img className="flex w-full  items-end" src={this.props.imagem} />
            </div>
            <div className="w-full lg:w-1/1  p-5 rounded-lg lg:rounded-l-none">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

