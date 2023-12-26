import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    //lấy thông tin sinh viên từ props
    let {renderStudent, stt} = this.props;

    return (
      <>
                    <tr>
                <td>{stt}</td>
                <td>{renderStudent.studentId}</td>
                <td>{renderStudent.studentName}</td>
                <td>{renderStudent.age}</td>
                <td>{renderStudent.sex===true?"Nam":"Nu"}</td>
                <td>
                  <div className="template-demo">
                    <button
                      type="button"
                      className="btn btn-danger btn-icon-text"
                    >
                      Xem
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-icon-text"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-icon-text"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
      </>
    )
  }
}
