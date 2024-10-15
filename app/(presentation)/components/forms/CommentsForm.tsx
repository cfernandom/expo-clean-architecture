import { CommentEntity } from '@/app/domain/entities/Comment.Entity'
import { object, number, string, ObjectSchema } from 'yup'
import { Formik } from 'formik'
import { CommentCreateEntity } from '@/app/domain/entities/CommentCreate.Entity'
import { TextInput } from 'react-native-gesture-handler'
import { Button, Text, View, StyleSheet } from 'react-native'


export default function CommentsForm(props:any) {

    let formComments: ObjectSchema<CommentCreateEntity> = object({
        message: string().required(),
        owner: string().required(),
        post: string().required().min(10).max(500)
    })

    return (
        <View>
            <Formik 
                initialValues={{message:'', owner:'', post:''}}
                validationSchema={formComments}
                onSubmit={(values) => 
                   props.handleSubmit(values)
                }
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
                        <TextInput
                            style={styles.input}
                            placeholder='Post Id'
                            onChangeText={handleChange('post')}
                            onBlur={handleBlur('post')}
                            value={values.post}
                        ></TextInput>
                        { touched.post && errors.post && <Text style={{color:'red'}}>{errors.post}</Text> }
                        <TextInput
                            style={styles.input}
                            placeholder='Owner'
                            onChangeText={handleChange('owner')}
                            onBlur={handleBlur('owner')}
                            value={values.owner}
                        ></TextInput>
                        { touched.owner && errors.owner && <Text style={{color:'red'}}>{errors.owner}</Text> }
                        <TextInput
                            style={styles.input}
                            placeholder='Message'
                            onChangeText={handleChange('message')}
                            onBlur={handleBlur('message')}
                            value={values.message}
                            multiline={true}
                        ></TextInput>
                        { touched.message && errors.message && <Text style={{color:'red'}}>{errors.message}</Text> }
                        <Button title='Submit' onPress={()=>handleSubmit}/>
                    </form>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#f0f0f0',
    },
  });