import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { navigateFromForm } from '../actions/navigation'
import { Link, browserHistory } from 'react-router';

const renderInput = field => (
  <div>
    <input {...field.input} type={field.type} className="form-control" />
    {field.meta.touched &&
    field.meta.error &&
    <span className="error">{field.meta.error}</span>}
  </div>
);

const renderTextArea = field => (
  <div>
    <textarea {...field.input} className="form-control"/>
    {
      field.meta.touched &&
      field.meta.error &&
      <span className="error">{field.meta.error}</span>
    }
  </div>
);

class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" component={renderInput} type="text" validate={required("Title")} />
        </div>

        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <Field name="categories" component={renderInput} type="text" validate={required("Categories")} />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <Field name="content" component={renderTextArea} type="text" validate={required("Content")} />
        </div>

        <button type="submit" className="btn btn-primary" disabled={this.props.invalid}>Submit</button>
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    );
  }
}

const required = (property) => (value) => value ? undefined : `${property} is required.`;

export default reduxForm({ form: 'PostsNewForm', onSubmit: createPost, onSubmitSuccess: navigateFromForm("/") })(PostsNew);
