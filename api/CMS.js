const express = require('express');
const da = require('../data-access');
const { json } = require('stream/consumers');
const { checkToken } = require('../auth/token_validation');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const router = express.Router();


// router.post('/UserLogin', async (req, res) => {
//   try {
//     const cmd = 'Pr_UserLogin';
//     const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
//     const c = await da.close();
//     res.json({
//       success: 200,
//       data: result.recordset
//     });
//   }
//   catch (error) {
//     const c = await da.close();
//     console.log(error)
//     res.status(500).json(error);
//   }

// });

router.post('/UserLogin', async (req, res) => {
  try {
    const cmd = 'Pr_UserLogin';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    const uid = req.body.username;
   
    if (!result || !result.recordset[0].userdata) {
      return res.json({
        success: 401,
        data: "Invalid userid or password"
      });
    }
   
    var data = result.recordset;    
 
    if (data != '') {
      const salt = genSaltSync(10);
      let encpassword = hashSync(req.body.Password, salt);
      const result1 = compareSync(req.body.Password, encpassword);
      const jsontoken = sign({ result: uid }, process.env.jwtpass, {
        expiresIn: process.env.expiresIn
      });
      return res.json({
        success: 200,
        data: data,
        token: jsontoken
      });
    } else {
      return res.status(401).json({
        success: 0,
        data: "Invalid Username or Password!",
        token: ""
      });
    }
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getseo', async (req, res) => {
  try {
    const cmd = "usp_getpagedata";
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    //const c = await da.close();

    res.json({
      success: 200,
      data: JSON.parse(Object.values(result.recordset[0])[0]),
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post("/Getblogdata", async (req, res) => {
  try {
    const cmd = "usp_getblogdata";
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    //const c = await da.close();

    res.json({
      success: 200,
      data: JSON.parse(Object.values(result.recordset[0])[0]),
    });
  } catch (error) {
    const c = await da.close();
    console.log(error);
    res.status(500).json(error);
  }
});
router.post('/Insert_UploadFolder', checkToken,async (req, res) => {
  try {
    const cmd = 'Insert_UploadFolder';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getfolder', checkToken, async (req, res) => {
  try {
    const cmd = 'pr_Getfolder';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Uploadfile',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_Uploadfile';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/getMenuRole', checkToken,async (req, res) => {
  try {
    const cmd = 'Pr_getMenuRole';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordsets
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertMenuRole', checkToken,async (req, res) => {
  try {
    const cmd = 'Pr_InsertMenuRole';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getpages',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_Getpages';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordsets
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/IUDNews',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_IUDNews';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetContentmaster',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetContentmaster';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Deletecontent',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_deletecontent';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/ApproveContent',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_ApproveContent';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/CreateCustomPage', checkToken,async (req, res) => {
  try {
    const cmd = 'Pr_CreateCustomPage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getpagesadd',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_Getpages_add';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Updatepage',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_Updatepage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetPagedetails',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetPagedetails';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getbreadcrumb',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_Getbreadcrumb';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertUpdatebreadcrumb',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_InsertUpdatebreadcrumb';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Deletebreadcrumb', checkToken,async (req, res) => {
  try {
    const cmd = 'Pr_Deletebreadcrumb';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/MenuRolebyProject',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_MenuRolebyProject';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetUtmSource',checkToken, async (req, res) => {
  try {
    const cmd = 'Proc_Get_UtmSource';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetEnquiry',checkToken, async (req, res) => {
  try {
    const cmd = 'Proc_GetEnquiry_json';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    var data = result.recordset[0];
    var dataArray = JSON.parse(Object.values(data)[0]);
    const c = await da.close();
    res.json({
      success: 200,
      data: dataArray
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertUpdateCenterInfo',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_InsertUpdateCenterInfo';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    console.log(result);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetCenterInfo',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetCenterInfo';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Deletecenterinfo',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_deletecenterinfo';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/UpdatefileDetails',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_UpdatefileDetails';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    console.log(result);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetmicrositeCount',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetmicrositeCount';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getmicrositedata', async (req, res) => {
  try {
    const cmd = 'usp_getmicrositedata';    
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    var data = result.recordset[0];
    var dataArray = JSON.parse(Object.values(data));
    const c = await da.close();
    res.json({
      success: 200,
      data: dataArray
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/Getmicrositepagesadd',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_Getmicrositepages_add';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/UpdateMicrositepage',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_UpdateMicrositepage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetmicrositePagedetails', checkToken,async (req, res) => {
  try {
    const cmd = 'Pr_GetmicrositePagedetails';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/DeleteImage',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_deleteimage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetContetPage',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetContetPage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertUpdateContentpage',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_InsertUpdateContentpage';
    const result = await da.execute(cmd, [{ name: 'MenuId', value: req.body.MenuId },
    { name: 'Name', value: req.body.Name },
    { name: 'projectId', value: req.body.projectId },
    { name: 'content', value: JSON.stringify(req.body.content) }], req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/IUDLookup',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_IUDLookup';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetLookUp',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetLookUp';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/DeleteLookup',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_DeleteLookup';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetLookupName',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_GetLookupName';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetProjectPackageMapping',checkToken, async (req, res) => {
  try {
    const cmd = 'Pr_getProjectPackageMapping';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/InsertPackage',checkToken, async (req, res) => {
  try {
    const cmd = 'usp_insertpackage';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/SendCMSActivationEmail',checkToken, async (req, res) => {
  try {
    const cmd = 'pr_SendCMSActivationEmail';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
router.post('/GetContentbytype', async (req, res) => {
  try {
    const cmd = 'Pr_GetContentbytype';
    const result = await da.executeEntity(cmd, req.body, req.headers["dbid"]);
    const c = await da.close();
    res.json({
      success: 200,
      data: result.recordset
    });
  }
  catch (error) {
    const c = await da.close();
    console.log(error)
    res.status(500).json(error);
  }

});
module.exports = router;
