import React from "react"
import "./style.scss"
import { TbTable } from "react-icons/tb"

const index = () => {
  return <div className="projects border p-5 w-100 d-flex flex-column align-items-center rounded-2 text-center gap-2">
    <TbTable size={`1.8em`} color="grey" className="mb-1"/>
    <h2 className="projects-title fs-4">Create your first GitHub project</h2>
    <p className="projects-text mb-3">Projects are a customizable, flexible tool for planning and tracking your work.</p>
    <button className="btn btn-success fw-semibold">New project</button>
  </div>
}

export default index;