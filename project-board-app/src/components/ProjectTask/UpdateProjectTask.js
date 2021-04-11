import React, { Component } from 'react'

 class UpdateProjectTask extends Component {
    render() {
        return (
           
    <div class="addProjectTask">
    <div class="container">
        <div class="row">
            <div class="col-md-8 m-auto">
                <a href="/ProjectBoard.html" class="btn btn-light">
                    Back to Board
                </a>
                <h4 class="display-4 text-center">Update Project Task</h4>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control form-control-lg" name="summary" placeholder="Project Task summary" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                    </div>
                    <div class="form-group">
                        <select class="form-control form-control-lg" name="status">
                            <option value="">Select Status</option>
                            <option value="TO_DO">TO DO</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="DONE">DONE</option>
                        </select>
                    </div>
                    <input type="submit" class="btn btn-primary btn-block mt-4" />
                </form>
            </div>
        </div>
    </div>
</div>

        )
    }
}
export default UpdateProjectTask;